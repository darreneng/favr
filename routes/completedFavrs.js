var data = require("../completed.json");
var data2 = require("../data.json");

exports.addCompletedFavr = function(req, res) {
	var name = req.query.name;
	var task = req.query.task;
	var date = req.query.date;
	var id = req.query.id;
	var favr = {"name":name,"task":task,"date":date,"id":id};
	data["favrs"].push(favr);

	findAndRemove(data2["favrs"], "id", id);


	res.render('index', data2);
}


function findAndRemove(array, property, value) {
  array.forEach(function(result, index) {
    if(result[property] === value) {
      //Remove from array
      array.splice(index, 1);
    }    
  });
}

