var data = require("../data.json");


exports.addCompletedFavr = function(req, res) {
	var name = req.query.name;
	var task = req.query.task;
	var date = req.query.date;
	var favr = {"name":name,"task":task,"date":date};
	data['users'][1]['completed'].push(favr);

	var favrs = data['users'][1];

	findAndRemove(data['users'][1]['favrs'], "name", name);


	res.render('home2', favrs);
}


//Function to remove JSON object from array
function findAndRemove(array, property, value) {
  array.forEach(function(result, index) {
    if(result[property] === value) {
      array.splice(index, 1);
    }    
  });
}

