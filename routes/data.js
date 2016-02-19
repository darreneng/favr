var data = require('../data.json');

exports.favrInfo = function(req, res) {
  	res.json(data);
}