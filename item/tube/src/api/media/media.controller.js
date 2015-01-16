
var Media = require('./media.model');

exports.index = function(req, res) {
	res.render('index',
  		{ title : 'Home' }
	)
};

exports.read = function(req, res) {
	
};

exports.create = function(req, res) {
	Media.create(req.query, function(err, thing) {
    	if(err) { return handleError(res, err); }
    	return res.status(201).json(thing);
  	});
};

exports.list = function(req, res) {
  	Media.find(function (err, medias) {
    	if(err) { return handleError(res, err); }
    	return res.status(200).json(medias);
	});
};

exports.randVideo = function(rq, res) {
	Media.find({'type': 'video'},function (err, medias) {
    	if(err) { return handleError(res, err); }
    	return res.status(200).json(medias);
	});
};