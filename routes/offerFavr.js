var data = require('../data.json');
var userdata = require('../public/js/userdata');

exports.offerFavr = function(req, res) {
	var name = req.query.name;
	var task = req.query.task;
	var date = req.query.date;
	var realdate = new Date(date);
	var options = {
    	weekday: "long", year: "numeric", month: "short",
		day: "numeric", hour: "2-digit", minute: "2-digit"
	};
	findIndex(data['users'], "username", name);
	if(findIndex == -1){
		alert("Not a valid user. Please enter a valid user.");
	}

	var user_id = 1;
	var recipient_id = 4;
	var favr_id = data['favrs'].length;
	var favr = {"id":favr_id,"name":name,"from":user_id,"to":recipient_id,
			"task":task,"date":realdate.toLocaleTimeString("en-us", options),
			"completed":false,"accepted":true}; // CHANGE ACCEPTED TO FALSE???
	data['favrs'].push(favr);
	data['users'][user_id]['favors'].push(favr_id); // Change to favrs

  res.render('home', userdata.getUserData(data, user_id));
};

function findIndex(array,property,value){
	var toReturn = -1;
	array.forEach(function(result, index){
		if(result[property] == value){
			toReturn = index;
			return index;
		}
	});
		return toReturn;
}
