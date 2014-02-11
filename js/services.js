'use strict';

var clientID = '1c21814089b72a7cd4ce9246009ddcfb';

angular.module('microbeats.services', [])

  // Player
  .factory('player', function($rootScope, audio, $location, storage) {
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
        var playCount = storage.get('playCount');
        if (playCount == 1000) alert("holy fucking shit you've listened to 1,000 microbeats you are awesome i will buy you a drink and give you lots of hugs");
        if (playCount == 2000) alert("2,000 plays you are awesome if we are not friends why are we not friends you are probably really rad");
        playCount = playCount + 1; 
        storage.set('playCount', playCount);
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
      },
      togglePause: function() {
        if (player.playing) {
          player.pause(player.track);
        } else {
          player.play(player.tracks, player.i);
        }
      }
    };

    audio.addEventListener('ended', function() {
      $rootScope.$apply(player.next());
    }, false);

    // Add native JS event listener for keyboard shortcuts.
    var checkKey = function checkKey(e) {
        var e = e || window.event;

        if (e.keyCode == '32') {
          // Spacebar
          player.togglePause();
          // Stop event bubbling so window doesn't scroll
          return false;
        } else if (e.keyCode == '74') {
          // j = down in vim
          $rootScope.$apply(player.next());
        } else if (e.keyCode == '75') {
          // k = up in vim
          $rootScope.$apply(player.previous());
        }
    };
    document.onkeydown = checkKey;

    return player;
  })

  // Audio Factory
  .factory('audio', function($document, $rootScope) {
    var audio = $document[0].createElement('audio');  
    return audio;
  })

  // Local Storage Factory
  .factory('storage', function(){            
    return {
      set: function(key, obj){
        var string = JSON.stringify(obj)
        localStorage.setItem(key, string);
      },
      get: function(key){
        var data = localStorage.getItem(key);
        var obj = JSON.parse(data);
        return obj;
      },
      clearAll: function(){
        localStorage.clear();
      }
    }     
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
