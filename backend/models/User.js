const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  phone: { type: Number },
  avatar:String,
  email: { type: String},
  password: { type: String },
  isadmin: { type: String,
  default :"false" },
  created_at:{
    type :Date,
    default : Date.now
  }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;