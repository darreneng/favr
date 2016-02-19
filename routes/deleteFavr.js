var data = require('../data.json');
var userdata = require('../public/js/userdata');

exports.deleteFavr = function(req, res) {
	var id = req.query.id;
	var user_id = 1;
	var favrs = data['users'][user_id]['favors'];

	findAndRemove(favrs, id);

  res.render('home', userdata.getUserData(data, user_id));
}

var findAndRemove = function(array, value) {
  array.forEach(function(result, index) {
		if (result == value) {
			array.splice(index, 1);
		}
  });
};
