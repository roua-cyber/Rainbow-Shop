const express = require('express')
const router = express.Router();
const {getAll} = require('../controller/collection')


router.get('/',getAll)
module.exports= router ;