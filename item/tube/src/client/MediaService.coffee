class MediaService

    constructor: (@$http) ->

    getRandomAudio: (callback)->
      request = @$http.get '/audio/random'
      request.then (result) =>
        callback(result.data)
