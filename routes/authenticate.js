var data = require('../data.json');
var userdata = require('../public/js/userdata');

//Render index and set all uesrs to inactive
exports.view = function(req,res){
for(var i = 0; i < data['users'].length; i++){
		data['users'][i]['active'] = false;
	}
 	res.render('index');
}

//Check login validation and render the appropriate page
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
