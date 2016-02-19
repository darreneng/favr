var data = require('../data.json');

exports.deleteFavr = function(req, res) {
	var name = req.query.name;

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

