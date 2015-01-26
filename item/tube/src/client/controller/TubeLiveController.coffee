class TubeController
    constructor: (@$scope, mediaService) ->
        @stateText = "play"
        @statePlay = false;


        @toggleState = () ->
          @statePlay = !@statePlay
          if @statePlay
            @stateText = "stop"
            mediaService.playRandomAudio()
          else
            @stateText = "play"
            mediaService.stop()



    playAudio: (audio)->
        tubeAudio = new TubeAudio(audio)
        tubeAudio.soundCloudTest()

angular.module("tube", [])
.service "MediaService", ['$http', MediaService]
.controller "TubeController", ['$scope', 'MediaService', TubeController]
