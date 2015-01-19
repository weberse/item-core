class AppController
    constructor: ->
        console.log("-tube run-")

    toJson: (item) ->
        JSON.stringify(item)

class TubeController extends AppController
    constructor: (@$scope) ->
        super

        @audios = [
            {url: "", src: "sc"}
            {url: "", src: "sc"}]
        @playText = "play"

    play: ->
        @playText = "stop"
        audio = new TubeAudio()
        audio.soundCloudTest()

    stop: ->
        @playText = "play"
        audio.stop()

    toJson: ->
        super @audios

TubeController.$inject = ["$scope"]

angular.module("tube", [])
    .controller("TubeController", TubeController)
