const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
 imageName: { type: String },
  created_at:{
    type :Date,
    default : Date.now
}});


module.exports = mongoose.model("image", ImageSchema);