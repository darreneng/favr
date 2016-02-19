var data = require('../data.json');

exports.view = function(req, res) {
	var completed = data['users'][0];
  	res.render('profile', completed);
};
