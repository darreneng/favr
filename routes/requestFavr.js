var data = require('../data.json');

exports.requestFavr = function(req, res) {
	var name = req.query.name;
	var task = req.query.task;
	var date = req.query.date;
	var favr = {"name":name,"task":task,"date":date};
	data['users'][0]['incoming'].push(favr);

	var favrs = data['users'][0];

  	res.render('home', favrs);
};
