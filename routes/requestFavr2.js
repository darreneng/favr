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
	var favr = {"name":"Peyton Manning","task":task,"date":realdate.toLocaleTimeString("en-us", options)};
	if(name === "Cam Newton"){
			data['users'][0]['incoming'].push(favr);
	}

	var favrs = data['users'][1];

  	res.render('home2', favrs);
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