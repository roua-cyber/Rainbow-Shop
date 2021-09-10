const express = require("express");
const router = express.Router();
const {
  addproduct,
  updateAllProducts,
  getAllProducts,
  getProductById,
  getProductsBycollection,
} = require("../controller/productControllers");

//get all products from db
//route get/api/products
//access public
router.get("/", getAllProducts);

//get a product by id from db
//route get/api/products/:id
//access public
router.get("/:id", getProductById);
router.put("/:id", updateAllProducts);
router.get("/collection", getProductsBycollection);

// multer / image upload
const multer = require("multer");
const upload = multer({
  //   dest: "uploads/",
  //   filename: function (req, file, cb) {
  //     console.log(file);
  //     cb(null, Date.now() + "-" + file.originalname + ".png");
  //   },
  storage: multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, cb) {
      console.log(file);
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});
router.post("/add", upload.single("product"), addproduct);

module.exports = router;
