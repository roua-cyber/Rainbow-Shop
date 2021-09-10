const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const updateAllProducts = async (req, res) => {
  try {
    await Product.findByIdAndUpdate({ _id: req.params.id }, req.body);
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const addproduct = async (req, res) => {
  try {
    console.log("hi", req.body);
    const newBody = JSON.parse(req.body.info);
    const imagePath = `${req.protocol}://${req.hostname}:${process.env.PORT}/${req.file.path}`;

    const newProduct = new Product({ ...newBody, imageUrl: imagePath });
    newProduct.save();

    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const getProductsBycollection = async (req, res) => {
  try {
    const products = await Product.find({}).populate("category");
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductsBycollection,
  updateAllProducts,
  addproduct,
};
