var data = require('../data.json');


exports.accept = function(req, res){
  	var name = req.query.name;
	var task = req.query.task;
	var date = req.query.date;
	var favr = {"name":name,"task":task,"date":date};
	data['users'][0]['favrs'].push(favr);

	var favrs = data['users'][0];

  findAndRemove(data['users'][0]['incoming'], "name", name);	
  
  res.render('home', favrs);
}

//Function to remove JSON object from array
function findAndRemove(array, property, value) {
  array.forEach(function(result, index) {
    if(result[property] === value) {
      array.splice(index, 1);
    }    
  });
}

//Function to find index of JSON object in array
 function findIndex(array, property, value) {
 	var toReturn = -1;
 	array.forEach(function(result, index) {
 		if(result[property] === value){
 			toReturn = index;
 			return index;
 		}
 	});
 	return toReturn;
 }

