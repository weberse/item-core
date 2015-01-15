
exports.index = function(req, res) {
	console.log('media controller');
	res.render('index',
  		{ title : 'Home' }
	)
};