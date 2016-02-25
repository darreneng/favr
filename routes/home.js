/*
 * GET home page.
 */

var data = require('../data.json');
var userdata = require('../public/js/userdata');

exports.view = function(req, res){
	//Find the user_id currently logged on
	var user_id = -1;
	for(var i = 0; i < data['users'].length; i++){
		if(data['users'][i]['active']){
			user_id = i;
		}
	}
	//var user_id = 1;
	var user = userdata.getUserData(data, user_id);

	res.render('home', user);
};
