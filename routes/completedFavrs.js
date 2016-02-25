var data = require("../data.json");
var userdata = require('../public/js/userdata');


exports.addCompletedFavr = function(req, res) {
	var id = req.query.id;
  data['favrs'][id]['completed'] = true;
	var user_id = 1;
  res.render('home', userdata.getUserData(data, user_id));
}
