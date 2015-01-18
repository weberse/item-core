class ItemTube
  constructor: () ->
    # audio = require('audio')
    # audio.init()
    audio = new TubeAudio()
    audio.soundCloudTest()

  play: () ->
    alert @audio
