
const mongoose = require("mongoose");
require("dotenv").config()


const ConnectDB = ()=>{
    mongoose.connect(
        process.env.MONGO_URI,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (err) => {
          if (err) return console.error(err);
          console.log("Connected to MongoDB");
        }
      );
}

module.exports= ConnectDB