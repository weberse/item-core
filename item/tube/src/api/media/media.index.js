'use strict';

var express = require('express');
var controller = require('./media.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.read);
router.post('/', controller.create);

module.exports = router;