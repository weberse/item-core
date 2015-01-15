module.exports = function(app) {
	app.use('/', require('./../src/api/media/media.index'));
};