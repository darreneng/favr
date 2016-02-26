var data = require('../data.json');

exports.view = function(req, res){
  res.render('signup2', data);
};