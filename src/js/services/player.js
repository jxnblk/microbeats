// Audio player

'use strict';


var audio = require('./audio');

//var Player = function() {
module.exports = function() {

  var player = {};
  // Expose audio element
  player.audio = audio;
  player.i = 0;
  player.playlistIndex = 0;
  player.playing = false;
  player.tracks = [];
  player.currentTrack = null;
  player.currentTime = 0;
  player.duration = 0;

  player.play = function(i) {
    player.i = i || 0;
    var track = player.tracks[player.i];
    player.playing = track;
    var src = track.src;
    player.currentTrack = player.playing;
    if (src != audio.src) audio.src = src;
    audio.play();
  };

  player.pause = function() {
    audio.pause();
    player.playing = false;
  };

  player.playPause = function(i) {
    var track = player.tracks[i];
    if (player.playing != track) {
      player.play(i);
    } else {
      player.pause();
    }
  };

  player.next = function() {
    if (player.i < player.tracks.length - 1) {
      player.i++;
      player.play(player.i);
    }
  };

  player.previous = function() {
    if (player.i > 0) {
      player.i--;
      player.play(player.i);
    }
  };

  player.load = function(track, index) {
    player.tracks[index] = track;
    if (!player.playing && !player.i && index == 0) {
      //player.currentTrack = player.tracks[0];
    }
  };

  player.seek = function(e) {
    if (!audio.readyState) return false;
    var percent = e.offsetX / e.target.offsetWidth || (e.layerX - e.target.offsetLeft) / e.target.offsetWidth;
    var time = percent * audio.duration || 0;
    audio.currentTime = time;
  };

  audio.addEventListener('timeupdate', function() {
    player.currentTime = audio.currentTime;
    player.duration = audio.duration;
  });

  audio.addEventListener('ended', function(){
    player.next();
  });

  return player;

};


