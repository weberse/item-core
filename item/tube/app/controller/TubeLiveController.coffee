class AppController
    constructor: ->
        console.log("-controller-")

    toJson: (item) ->
        JSON.stringify(item)

class TubeController extends AppController
    constructor: (@$scope) ->
        super
        console.log(@$scope)
        @audios = [
            {url: "", src: "sc"}
            {url: "", src: "sc"}]

    play: ->
        @play = true

    toJson: ->
        super @audios

TubeController.$inject = ["$scope"]

angular.module("tube", [])
    .controller("TubeController", TubeController)
