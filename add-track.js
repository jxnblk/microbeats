
var fs = require('fs');
var minimist = require('minimist')(process.argv.slice(2));
var request = require('request');
var tracks = require('./tracks.json');
var baseUrl = 'http://soundcloud.com/jxnblk/',
    clientID = '1c21814089b72a7cd4ce9246009ddcfb',
    api = 'http://api.soundcloud.com/resolve.json',
    track,
    url,
    data;

function addTrack(url, callback) {
  request(url, function (error, response, body) {
    if(error) {
      console.error(error);
      callback(false);
    }
    if (!error && response.statusCode == 200) {
      delete body.user_id;
      var data = JSON.parse(body);
      delete data.user_id; delete data.duration; delete data.commentable;
      delete data.state; delete data.original_content_size; delete data.sharing;
      delete data.tag_list; delete data.streamable; delete data.embeddable_by;
      delete data.downloadable; delete data.purchase_url; delete data.label_id;
      delete data.purchase_title; delete data.genre; delete data.label_name;
      delete data.release; delete data.track_type; delete data.key_signature;
      delete data.isrc; delete data.video_url; delete data.bpm; delete data.release_year;
      delete data.release_month; delete data.release_day; delete data.original_format;
      delete data.license; delete data.user; delete data.playback_count;
      delete data.download_count; delete data.favoritings_count; delete data.comment_count;
      callback(data);
    }
  });
};

if(minimist.track) {
  track = minimist.track;
  url = api + '?client_id=' + clientID + '&url=' + baseUrl + track;
  console.log('Getting data for ' + track);
  console.log('tracks', tracks.length);
  addTrack(url, function(track) {
    if (!track) { return false }
    tracks.unshift(track);
    console.log(tracks, 'tracks', tracks.length);
    fs.writeFileSync('tracks.json', JSON.stringify(tracks));
  });
} else {
  console.log('no track provided, use the --track flag');
}


