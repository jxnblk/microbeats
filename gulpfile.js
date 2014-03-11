
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minimist = require('minimist')(process.argv.slice(2));
var request = require('request');
var jsonEditor = require('gulp-json-editor');

gulp.task('default', function() {
  console.log('herro!');
  if(minimist) {
    console.log(minimist);
  }
});

gulp.task('add', function() {
  var baseUrl = 'http://soundcloud.com/jxnblk/';
  var track;
  var clientID = '0d33361983f16d2527b01fbf6408b7d7';
  var api = 'https://api.soundcloud.com/resolve.json';
  var url;
  var data;
  if(minimist.track) {
    track = minimist.track;
    url = api + '?client_id=' + clientID + '&url=' + baseUrl + track;
    console.log(track);
    console.log(url);
    request(url, function (error, response, body) {
      if(error) console.error(error);
      if (!error && response.statusCode == 200) {
        delete body.user_id;
        var data = JSON.parse(body);
        delete data.user_id; delete data.duration; delete data.commentable; delete data.state; delete data.original_content_size; delete data.sharing; delete data.tag_list; delete data.permalink; delete data.streamable; delete data.embeddable_by; delete data.downloadable; delete data.purchase_url; delete data.label_id; delete data.purchase_title; delete data.genre; delete data.label_name; delete data.release; delete data.track_type; delete data.key_signature; delete data.isrc; delete data.video_url; delete data.bpm; delete data.release_year; delete data.release_month; delete data.release_day; delete data.original_format; delete data.license; delete data.user; delete data.playback_count; delete data.download_count; delete data.favoritings_count; delete data.comment_count;
        return gulp.src('tracks-lite.json')
          .pipe(jsonEditor(function(json) {
            json.unshift(data);
            return json;
          }))
          .pipe(gulp.dest('.'));
      }
    });

  } else {
    console.log('no track provided, use the --track flag');
  }

});

