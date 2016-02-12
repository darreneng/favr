var data = require('../data.json');

exports.favrInfo = function(req, res) {
  	res.json(data['favrs']);
  	res.render('profile',data);
}