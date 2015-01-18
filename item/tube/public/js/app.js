(function() {
  var TubeAudio, script;

  TubeAudio = (function() {
    function TubeAudio(audio) {
      this.audio = audio;
    }

    TubeAudio.prototype.play = function() {
      return alert(this.audio);
    };

    return TubeAudio;

  })();

  script = document.createElement('script');

  script.src = 'http://connect.soundcloud.com/sdk.js';

  document.head.appendChild(script);

  script.onload = function() {
    SC.initialize({
      client_id: '5409ed67988608ebd6ab1ab4264243f8'
    });
    return SC.stream("/tracks/293", function(sound) {
      return sound.play();
    });
  };

}).call(this);
