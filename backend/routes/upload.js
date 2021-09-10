const express = require("express");
const router = express.Router();
const multer = require("multer");
Image = require("../models/image");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./backend/routes/uploads");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/", upload.single("avatar"), (req, res) => {
  path =
    req.protocol +
    "://" +
    req.hostname +
    ":" +
    5000 +
    "/uploads/" +
    req.file.filename;
  let newImage = new Image({ imageName: path });
  console.log(newImage);
  newImage
    .save()
    .then((img) => res.status(201).send(img))
    .catch((err) => {
      res.status(500).send("server error");
      console.error(err.message);
    });
});
module.exports = router;
