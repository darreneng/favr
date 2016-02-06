var data = require("../data.json");
exports.view = function(req, res) {
  res.render('offer');
  var newOffer = {"name": req.query.name, "task": req.query.task,
                  "date": req.query.duedate};
  console.log("request received");
  data['favrs'].push(newOffer);
};
