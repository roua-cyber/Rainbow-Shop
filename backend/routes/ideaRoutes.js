const express = require('express')
const router = express.Router();
const {getAll} = require('../controller/ideas')


router.get('/',getAll)



module.exports= router ;