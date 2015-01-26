class MediaService

    constructor: (@$http) ->
      @audio = new TubeAudio()

    playRandomAudio: () ->
      @getRandomAudio(@audio.soundCloudTest)

    getRandomAudio: (callback)->
      request = @$http.get '/audio/random'
      request.then (result) =>
        callback(result.data)

    stop: ()->
      @audio.stop();