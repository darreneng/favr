// Mongoose DB Schemas
var Mongoose = require('mongoose');

var UserSchema = new Mongoose.Schema({
  username:   String,
  first:      String,
  Last:       String,
  password:   String,
  favrs:      [{ type: Schema.Types.ObjectId, ref: 'Favr'}]
});

exports.User = Mongoose.model('User', UserSchema);
