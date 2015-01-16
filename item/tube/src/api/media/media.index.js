'use strict';

var express = require('express');
var controller = require('./media.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.get('/list', controller.list);
router.get('/play', controller.play);

module.exports = router;