var data = require("../completed.json");
var pendingData = require("../data.json");

exports.addCompletedFavr = function(req, res) {
	var name = req.query.name;
	var task = req.query.task;
	var date = req.query.date;
	var favr = {"name":name,"task":task,"date":date};
	data["favrs"].push(favr);

	findAndRemove(pendingData["favrs"], "name", name);


	res.render('home', pendingData);
}


//Function to remove JSON object from array
function findAndRemove(array, property, value) {
  array.forEach(function(result, index) {
    if(result[property] === value) {
      array.splice(index, 1);
    }    
  });
}

