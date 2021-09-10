const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  owner: { type: mongoose.Types.ObjectId,
ref : " user"
},
  title: { type: String },
  description: { type: String },
  created_at:{
    type :Date,
    default : Date.now
  }
});


module.exports = mongoose.model("post", PostSchema);