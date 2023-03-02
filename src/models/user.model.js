const mongoose = require('mongoose')
const { Schema } = mongoose;
// create Schema to shape database
const userSchema = new Schema({
  name: String,
  email: String,
  city: String,
});
// create model
const User = mongoose.model("user", userSchema);

module.exports = User;
