
class TubeAudio
  soundCloudTest: (audio) ->
    script = document.createElement 'script'
    script.src = 'http://connect.soundcloud.com/sdk.js';
    document.head.appendChild script

    script.onload = ()->
      SC.initialize
        client_id: '5409ed67988608ebd6ab1ab4264243f8'
      SC.stream audio.url, (sound)->
        sound.play()
        console.log("play")
  stop: () ->
    SC.stop()
