const mongoose = require('mongoose');
//define schema for user collection 
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


module.exports = mongoose.model('User', userSchema);//export this user model

