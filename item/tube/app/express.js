/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , config = require('./config')
  , mongoose = require('mongoose')
  , media = require('./../src/api/media/media.index')

module.exports = function(app) {
	app.set('views', __dirname + './../views')
	app.set('view engine', 'jade')
	app.use(express.static(__dirname + '/public'))
};