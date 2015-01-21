class TubeController
    constructor: (@$scope, mediaService) ->
        $scope.audios = [
            {url: "", src: "sc"}
            {url: "", src: "sc"}]
        @playText = "play"

        @play = () ->
          mediaService.getRandomAudio((data) ->
            tubeAudio = new TubeAudio()
            tubeAudio.soundCloudTest(data)
          )
          @playText = "stop"

    stop: ->
        @playText = "play"
        audio.stop()

    playAudio: (audio)->
        tubeAudio = new TubeAudio(audio)
        tubeAudio.soundCloudTest()

angular.module("tube", [])
.service "MediaService", ['$http', MediaService]
.controller "TubeController", ['$scope', 'MediaService', TubeController]
