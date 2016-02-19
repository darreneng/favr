var data = require('../data.json');

exports.requestFavr = function(req, res) {
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
		alert("Not Valid User");
	}
	var favr = {"name":name,"task":task,"date":realdate.toLocaleTimeString("en-us", options)};
	data['users'][0]['incoming'].push(favr);

	var favrs = data['users'][0];

  	res.render('home', favrs);
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