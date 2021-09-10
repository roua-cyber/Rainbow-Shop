require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const multer = require("multer");
const cors = require("cors");
// const ConnectDB=require('./helpers/ConnectDB')
const productRoutes = require("./routes/productRoutes");
const ideasRoute = require("./routes/ideasRoute");
const landingRoute = require("./routes/landingRoute");
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "../", "uploads")));
app.use("/api/products", productRoutes);
app.use("/shopdrop", landingRoute);

app.use("/api/ideas", ideasRoute);
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/post", require("./routes/post"));
app.use("/upl", require("./routes/upload"));

//setup for deployment
if (process.env.NODE_ENV == production) {
  app.use(express.static(path.join(__dirname, "../", "frontend", "build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../", "frontend", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => {
    res.send("developement phase");
  });
}

//multer
// const fileStorageEngine = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "./backend/images"); //important this is a direct path fron our current file to storage location
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + "-" + file.originalname);
//     },
//   });

//   const upload = multer({ storage: fileStorageEngine });

//   app.post("/single", upload.single("image"), (req, res) => {
//     console.log("hello :",req.file);
//     res.send("Single FIle upload success");
//   });

app.listen(process.env.PORT, () => console.log("server running"));
