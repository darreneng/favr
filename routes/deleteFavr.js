var data = require('../data.json');
var userdata = require('../public/js/userdata');

exports.deleteFavr = function(req, res) {
	var id = parseInt(req.query.id);
	var user_id = 1;
	var favrs = data['users'][user_id]['favrs'];

  for (i = 0; i < favrs.length; i++) {
		if (favrs[i] === id) {
			favrs.splice(i, 1);
		}
  }

  res.render('home', userdata.getUserData(data, user_id));
}
