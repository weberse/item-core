var ItemTube;

ItemTube = (function() {
  function ItemTube() {
    var audio;
    audio = new TubeAudio();
    audio.soundCloudTest();
  }

  ItemTube.prototype.play = function() {
    return alert(this.audio);
  };

  return ItemTube;

})();
