/*
 * GET home page.
 */

var data = require('../data.json');
var userdata = require('../public/js/userdata');
exports.view = function(req, res){
  var user_id = 1;
  var user = userdata.getUserData(data, user_id);

  res.render('home', user);
};
