var data = require('../data.json');

exports.view = function(req, res){
	var incoming = data['users'][0];

  res.render('home', incoming);
};