/*
 * GET home page.
 */

var data = require('../data.json');

exports.view = function(req, res){

	var favrs = data['users'][1];

  res.render('home2', favrs);
};