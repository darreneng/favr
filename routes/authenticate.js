var data = require('../data.json');
var userdata = require('../public/js/userdata');

exports.login = function(req, res){

	var username = req.body.username;
	var password = req.body.password;

	for(i =0 ; i < data['users'].length; i++){
		if(data['users'][i]['username'] == username){
			if(data['users'][i]['password'] == password){
				data['users'][i]['active'] = true;
				var user = userdata.getUserData(data,data['users'][i]['id']);
				res.render('home',user);
				return;
			}	
		}
	}

	var error = {"message": true};

  	res.render('index', error);
};

// //Add the user to the JSON
// exports.addUser = function(req,res){
	
// 	//JSON fields
// 	var username = req.body.name;
// 	var password = req.body.password;
// 	var id = data['users'].length;

// 	//Create JSON
// 	var newUser = {"id": id, "username": username, "password": password, "favrs": []};

// 	//Push to data
// 	data['users'].push(newUser);

// 	res.render('index');
// }
