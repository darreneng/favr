var data = require('../data.json');
var userdata = require('../public/js/userdata');


exports.accept = function(req, res){
  var id = req.query.id;

  data['favrs'][id]['accepted'] = true;
  var user_id = 1;

  res.render('home', userdata.getUserData(data, user_id));
}
