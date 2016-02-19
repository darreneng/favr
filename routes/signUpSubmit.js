var data = require('../data.json');

exports.signUp = function(req, res){

	var name = req.query.name;
	var password = req.query.password;
	var username = req.query.username;

	var newUser = {"username": username, "password": password};

	//data['users'].push(newUser);

	res.render('index', data);
};