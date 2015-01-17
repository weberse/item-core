'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MediaSchema = new Schema({
  type: String,
  name: String,
  url: String,
  source: String,
  source_id: String
});

module.exports = mongoose.model('Media', MediaSchema);