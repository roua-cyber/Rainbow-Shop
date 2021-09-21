require("dotenv").config();
const products = require("./data/products");
const users = require("./data/users.js");
const ideas = require("./data/ideas.js");
const cakes = require("./data/cakes.js");
const collections = require("./data/collection.js");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const User = require("./models/userModel.js");
const Ideas = require("./models/Ideas.js");
const Cake = require("./models/cakes.js");
const Collection = require("./models/collection.js");

connectDB();
const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    await User.deleteMany({});
    await User.insertMany(users);
    // await Ideas.deleteMany({});
    // await Ideas.insertMany(ideas);
    // await Cake.deleteMany({});
    // await Cake.insertMany(cakes);
    await Collection.deleteMany({});
    await Collection.insertMany(collections);
    console.log("data import success");
    process.exit();
  } catch (error) {
    console.error("error with data import", error);
    process.exit(1);
  }
};

importData();
