app.service 'Media', ['$http',($http) ->
new class Media
  constructor: (@$http) ->
    @getRandomAudio()

  getRandomAudio: ->
    request = @$http.get '/audio/random'
    request.then (result) =>
      @audio = result
]
