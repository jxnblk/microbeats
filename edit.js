#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const prompt = require('prompts')
const hyphenate = require('lodash.kebabcase')
const tracks = require('./src/tracks.json')

// todo....
// const S3 = require('aws-sdk/clients/s3')
// const [ ,, file ] = process.arvg
// const bucket = new S3({ params: { Bucket: 'microbeats' } })

const filename = path.join(__dirname, 'src', 'tracks.json')

const add = async () => {
  const date = new Date().toISOString()
  const { title, url } = await prompt([
    {
      type: 'text',
      name: 'title',
      message: 'Title',
    },
    {
      type: 'text',
      name: 'url',
      message: 'url',
    },
  ])
  const name = hyphenate(title)
  const track = {
    id: 'MB' + (tracks.length + 1),
    date,
    name,
    title,
    url,
  }
  tracks.push(track)

  console.log(
    JSON.stringify(track, null, 2)
  )

  const { confirm } = await prompt({
    type: 'confirm',
    name: 'confirm',
    message: 'Add track?',
  })
  if (confirm) {
    fs.writeFileSync(filename, JSON.stringify(tracks, null, 2))
  }
}

add()
