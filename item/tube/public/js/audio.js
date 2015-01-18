var TubeAudio;

TubeAudio = (function() {
  function TubeAudio() {}

  TubeAudio.prototype.soundCloudTest = function() {
    var script;
    script = document.createElement('script');
    script.src = 'http://connect.soundcloud.com/sdk.js';
    document.head.appendChild(script);
    return script.onload = function() {
      SC.initialize({
        client_id: '5409ed67988608ebd6ab1ab4264243f8'
      });
      return SC.stream("/tracks/293", function(sound) {
        return sound.play();
      });
    };
  };

  return TubeAudio;

})();
