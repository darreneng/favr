var data = require('../completed.json');

exports.view = function(req, res) {
	var name = req
  	res.render('profile', data);
};
