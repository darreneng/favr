var data = require('../data.json');
var userdata = require('../public/js/userdata');

exports.offerFavr = function(req, res) {

	var name = req.query.name;

	//Find the recipient id
	var recipient_id = -1;
	for(var j = 0; j < data['users'].length;j++){
		if(data['users'][j]['username'] == name){
			recipient_id = data['users'][j]['id'];
		}
	}

	//No such user exists, render an error message
	if(recipient_id == -1){
		var message = {"error" : true};
		res.render('offer', message);
		return;
	}

	//Find the user_id currently logged on
	var user_id = -1;
	for(var i = 0; i < data['users'].length; i++){
		if(data['users'][i]['active']){
			user_id = i;
		}
	}

	var task = req.query.task;
	var date = req.query.date;
	var realdate = new Date(date);
	var options = {
    	weekday: "long", year: "numeric", month: "short",
		day: "numeric", hour: "2-digit", minute: "2-digit"
	};
	var favr_id = data['favrs'].length;

	//Create the new favr object
	var favr = {"id":favr_id,"name":name,"from":user_id,"to":recipient_id,
			"task":task,"date":realdate.toLocaleTimeString("en-us", options),
			"completed":false,"accepted":false}; 



	//Add as a new JSON object to multiple Favrs array
	data['favrs'].push(favr);
	data['users'][user_id]['favrs'].push(favr_id); 
	data['users'][recipient_id]['favrs'].push(favr_id);

  res.render('home', userdata.getUserData(data, user_id));
};

