var data = require('../data.json');

exports.view = function(req, res){
	//Make sure no users are marked as active
	for(var i = 0; i < data['users'].length; i++){
		data['users'][i]['active'] = false;
	}
 	res.render('index');
};

//Add the user to the JSON
exports.addUser = function(req,res){
	
	//JSON fields
	var username = req.body.name;
	var password = req.body.password;
	var id = data['users'].length;

	//Create JSON
	var newUser = {"id": id, "username": username, "password": password, "favrs": [], "active": false, "img":"images/stock.png"};

	//Push to data
	data['users'].push(newUser);

	res.render('index');
}
