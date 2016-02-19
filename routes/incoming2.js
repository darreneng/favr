var data = require('../data.json');

exports.view = function(req, res){
	var incoming = data['users'][1];

  res.render('home2', incoming);
};
