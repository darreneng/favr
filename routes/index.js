var data = require('../data.json');

exports.view = function(req, res){
  res.render('index', data);
};

//Add the user to the JSON
exports.addUser = function(req,res){
	
	//JSON fields
	var username = req.body.name;
	var password = req.body.password;
	var id = data['users'].length;

	//Create JSON
	var newUser = {"id": id, "username": username, "password": password, "favrs": []};

	//Push to data
	data['users'].push(newUser);

	res.render('index');
}
