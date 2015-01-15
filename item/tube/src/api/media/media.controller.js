
var Media = require('./media.model');

exports.index = function(req, res) {
	res.render('index',
  		{ title : 'Home' }
	)
};

exports.read = function(req, res) {
	
};

exports.create = function(req, res) {

	Media.create(req.body, function(err, thing) {
    	if(err) { return handleError(res, err); }
    	return res.status(201).json(thing);
  	});
};