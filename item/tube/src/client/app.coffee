class TubeAudio
  constructor: (@audio) ->

  play: () ->
    alert @audio

script = document.createElement 'script'
script.src = 'http://connect.soundcloud.com/sdk.js';
document.head.appendChild script
script.onload = ()->
  SC.initialize
    client_id: '5409ed67988608ebd6ab1ab4264243f8'
  SC.stream "/tracks/293", (sound)->
    # sound.play()
