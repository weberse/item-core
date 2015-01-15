/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , config = require('./config')
  // , Media = require('./../src/models/media')
  , mongoose = require('mongoose')
  , media = require('./../src/api/media/media.index')

module.exports = function(app) {
	// var app = express()

	// mongoose.connect(config.mongo.uri);
	// var db = mongoose.connection;
	// db.on('error', console.error.bind(console, 'connection error:'));

	// db.once('open', function callback () {

	//   var media = new Media({
	//     name: 'test_name',
	//     source: 'test_source'
	//   });
	//   media.save();

	// });

	function compile(str, path) {
	  return stylus(str)
	    .set('filename', path)
	    .use(nib());
	}

	app.set('views', __dirname + './../views')
	app.set('view engine', 'jade')
	// app.use(express.logger('dev'))
	app.use(stylus.middleware(
	  { src: __dirname + '/public'
	  , compile: compile
	  }
	))
	app.use(express.static(__dirname + '/public'))

	// media.run

	// app.listen(8080)
};