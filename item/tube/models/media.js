'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MediaSchema = new Schema({
  name: String,
  source: String
});

module.exports = mongoose.model('Media', MediaSchema);