var data = require('../data.json');

exports.deleteFavr = function(req, res) {
	var name = req.query.name;

	var favrs = data['users'][0];


	findAndRemove(data['users'][0]['favrs'], "name", name);

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

