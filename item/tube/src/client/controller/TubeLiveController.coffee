class TubeController
    constructor: (@$scope, mediaService) ->
        $scope.audios = [
            {url: "", src: "sc"}
            {url: "", src: "sc"}]
        @playText = "play"

        @play = () ->
          mediaService.getRandomAudio()
          @playText = "stop"
          console.log()
        # audio = new TubeAudio()
        # audio.soundCloudTest()

    stop: ->
        @playText = "play"
        audio.stop()

angular.module("tube", [])
.service "MediaService", ['$http', MediaService]
.controller "TubeController", ['$scope', 'MediaService', TubeController]
