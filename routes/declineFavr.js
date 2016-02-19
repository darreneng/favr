var data = require('../data.json');

exports.decline = function(req, res){
  var name = req.query.name;
  findAndRemove(data['users'][0]['incoming'], "name", name);	
  
  var favrs = data['users'][0];

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
