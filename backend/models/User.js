// // models/User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   user_id: { type: String, required: true, unique: true },
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   address: { type: String, required: true },
//   iAgree: { type: Boolean, required: true }
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user_id: String,
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  address: String,
  iAgree: Boolean,
  role: { type: String, enum: ['user', 'admin'], default: 'user' } // Add role field
});

module.exports = mongoose.model('User', UserSchema);
