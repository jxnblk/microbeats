'use strict';

var clientID = '1c21814089b72a7cd4ce9246009ddcfb';

angular.module('microbeats.services', [])

  // Player
  .factory('player', function($rootScope, audio, $location) {
    var player,
        tracks,
        track,
        i = 0,
        urlParams,
        currentTimePercentage = audio.currentTime;
        
    player = {
      track: track,
      tracks: tracks,
      i: i,
      playing: false,
      paused: false,
      /*play: function(track) {
        player.track = track;
        if (player.paused != track) {
          audio.src = track.stream_url + '?client_id=' + clientID;
        };
        audio.play();
        player.playing = track;
        //player.i = i;
        $location.hash(track.permalink);
        window.smoothScroll(document.getElementById(track.permalink));
        player.paused = false;
      },*/
      
      play: function(tracks, i) {
        player.tracks = tracks;
        urlParams =  '?client_id=' + clientID;
        if (player.paused != tracks[i]) {
          audio.src = tracks[i].stream_url + urlParams;
        };
        audio.play();
        player.playing = tracks[i];
        player.i = i;
        $location.hash(player.tracks[player.i].permalink);
        window.smoothScroll(document.getElementById(player.tracks[player.i].permalink));
        player.paused = false;
      },
      
      pause: function(track) {
        if (player.playing) {
          audio.pause();
          player.playing = false;
          player.paused = track;
        }
      },
      stop: function(track) {
        audio.pause();
        player.playing = false;
        player.paused = true;
      },
      next: function() {
        if(player.i<player.tracks.length-1) {
          player.i = player.i+1;
          $location.hash(player.tracks[player.i].permalink);
          window.smoothScroll(document.getElementById(player.tracks[player.i].permalink));
          if (player.playing) player.play(player.tracks, player.i);
        } ;
      },
      previous: function() {
        if(player.i>0) player.i = player.i-1;
        $location.hash(player.tracks[player.i].permalink);
        window.smoothScroll(document.getElementById(player.tracks[player.i].permalink));
        if (player.playing) player.play(player.tracks, player.i);
      },
      loadTrack: function(tracks, i) {
        player.tracks = tracks;
        player.i = i;
        $location.hash(tracks[i].permalink);
      }
    };
    audio.addEventListener('ended', function() {
      $rootScope.$apply(player.next());
    }, false);
    return player;
  })

  // Audio Factory
  .factory('audio', function($document, $rootScope) {
    var audio = $document[0].createElement('audio');  
    return audio;
  })

  .filter('playTime', function() {
    return function(ms) {
      var hours = Math.floor(ms / 36e5),
          mins = '0' + Math.floor((ms % 36e5) / 6e4),
          secs = '0' + Math.floor((ms % 6e4) / 1000);
            mins = mins.substr(mins.length - 2);
            secs = secs.substr(secs.length - 2);
      if (hours){
        return hours+':'+mins+':'+secs;  
      } else {
        return mins+':'+secs;  
      }; 
    };
  })

  .filter('dateSimple', function() {
    return function(dateString) {
      return moment(new Date(dateString)).format('LL');
    };
  })

;
