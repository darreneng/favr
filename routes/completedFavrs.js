var data = require("../data.json");
var userdata = require('../public/js/userdata');


exports.addCompletedFavr = function(req, res) {
	var id = req.query.id;
  data['favrs'][id]['completed'] = true;
  //Find the user_id currently logged on
	var user_id = -1;
	for(var i = 0; i < data['users'].length; i++){
		if(data['users'][i]['active']){
			user_id = i;
		}
	}
	//var user_id = 1;
  res.render('home', userdata.getUserData(data, user_id));
}
