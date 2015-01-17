'use strict';

var express = require('express');
var controller = require('./media.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.get('/list', controller.list);
router.get('/rand', controller.rand);

module.exports = router;