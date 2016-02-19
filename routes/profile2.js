var data = require('../data.json');

exports.view = function(req, res) {
	var completed = data['users'][1];
  	res.render('profile2', completed);
};
