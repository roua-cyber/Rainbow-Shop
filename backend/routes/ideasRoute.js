const express = require('express')
const router = express.Router();
const {getAll} = require('../controller/ideas')

//get all products from db 
//route get/api/products
//access public
router.get('/',getAll)
module.exports= router ;