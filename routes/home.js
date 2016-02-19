/*
 * GET home page.
 */

var data = require('../data.json');

exports.view = function(req, res){

	var favrs = data['users'][0];

  res.render('home', favrs);
};