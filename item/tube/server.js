/**
 * Main application file
 */

'use strict';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./app/config');

// Connect to database
mongoose.connect(config.mongo.uri);

var app = express();
var server = require('http').createServer(app);

require('./app/express')(app);
require('./app/routes')(app);

// Start server
server.listen('3000', function () {
  console.log('Tube running');
});

// Expose app
exports = module.exports = app;