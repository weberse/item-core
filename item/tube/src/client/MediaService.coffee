class MediaService

    constructor: (@$http) ->
      @getRandomAudio()

    getRandomAudio: ->
      request = @$http.get '/audio/random'
      request.then (result) =>
        console.log(result.data)
