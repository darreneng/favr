// Mongoose DB Schemas
var Mongoose = require('mongoose');

var FavrSchema = new Mongoose.Schema({
  from:       {type: Schema.Types.ObjectId, ref: 'User'},
  to:         {type: Schema.Types.ObjectId, ref: 'User'},
  accepted:   Boolean,
  completed:  Boolean,
  task:       String,
  date:       Date,
});

exports.Favr = Mongoose.model('Favr', FavrSchema);
