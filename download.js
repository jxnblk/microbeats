
// Script to download all tracks from soundcloud and upload to microbeats.now.sh API

const fs = require('fs')
const path = require('path')
const https = require('https')
const http = require('http')

const request = require('request')

const lame = require('lame')
const wav = require('wav')

const { find } = require('lodash')

const tracks = require('./tracks.json')
const miss = require('./missing.json')
const clientID = '1c21814089b72a7cd4ce9246009ddcfb'

// dev
const API = 'http://localhost:3000'

const download = (track, cb) => {
  const {
    created_at,
    permalink,
    title,
    download_url
  } = track
  if (!download_url) {
    return cb('Error')
  }
  const url = (download_url + `?client_id=${clientID}`)
  console.log('Downloading.. ', title, url)

  const get = /^https/.test(url)
    ? https.get
    : http.get
  get(url, (res) => {
    console.log(res.statusCode)
    console.log(res.headers.location)

    http.get(res.headers.location, (res) => {
      const contentType = res.headers['content-type']
      const ext = contentType === 'audio/x-wav'
        ? 'wav'
        : 'mp3'
      const filename = path.join(__dirname, 'audio', permalink + '.' + ext)
      console.log('Saving', filename)
      const file = fs.createWriteStream(filename)

      res.pipe(file)

      file.on('finish', () => {
        if (ext === 'wav') {
          console.log('converting wav to mp3')
          wavToMp3(filename, () => {
            cb()
          })
        } else {
          cb()
        }
      })
    })
  })
}

const wavToMp3 = (filename, cb) => {
  const file = fs.createReadStream(filename)
  const outFilename = filename.replace(/\.wav$/, '.mp3')
  const outFile = fs.createWriteStream(outFilename)
  console.log('Encoding', outFilename)
  const reader = new wav.Reader()
  const onFormat = (format) => {
    const encoder = new lame.Encoder(format)
    reader.pipe(encoder).pipe(outFile)
    encoder.on('finish', () => {
      console.log('Done encoding', filename)
      cb()
    })
  }

  reader.on('format', onFormat)

  file.pipe(reader)
}

// Microbeats API
const auth = (cb) => {
  const url = API + '/auth'
  const req = request.post(url, {
    form: {
      username: 'jxnblk',
      passcode: null // Put passcode here
    }
  }, (err, res) => {
    if (err) return console.error(err)
    const body = JSON.parse(res.body)
    cb(err, body.token)
  })
}

const upload = (track, token, cb) => {
  const {
    permalink,
    title,
    permalink_url,
    created_at
  } = track
  const url = API + '/tracks' + `?token=${token}`
  const filename = path.join(__dirname, 'audio', permalink + '.mp3')
  console.log('Uploading', title, filename)

  const req = request.post(url, cb)
  const form = req.form()
  form.append('name', permalink)
  form.append('title', title)
  form.append('date', created_at)
  form.append('file',
    fs.createReadStream(filename), {
      filename: permalink + '.mp3'
    })
}

const downloadTrack = (track) => {
  download(track, (err) => {
    if (err) {
      return console.error('No download url for', track.title)
    }
    console.log('Downloaded and converted', track.title)
  })
}

// Download tracks from soundcloud
// tracks.forEach(downloadTrack)


/*
auth((err, token) => {
  if (err) return console.error(err)
  console.log('Got token', token)

  console.log('Uploading ' + missing.length + ' tracks')
  missing.forEach(track => {
    console.log('Uploading', track.title)
    upload(track, token, () => {
      console.log('Uploaded', track.title)
    })
  })
})
*/


