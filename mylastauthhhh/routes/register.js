const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/User');
require("dotenv").config()

const { body, validationResult } = require('express-validator');
const router=express.Router()

router.post('/',
   [ body('firstname',"must contain alpha").isAlpha(),
    body('lastname' ,"must contain alpha").isAlpha(),
    body('email').isEmail(),
    body('phone',"must contain nums").isNumeric(),
    body('password',"length less than 5").isLength({min:5}),

   ] , (req,res)=>{
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    User.find({email:req.body.email})
    .then(
        users=>{
            if(users.length){
                return res.status(400).send({errors : [{msg : "User already exists"}]})
            }
            let newUser = new User (req.body)
            bcrypt.genSalt(10,(err,salt)=>{
                if (err){
                    throw err ;
                }
                console.log(salt)
                bcrypt.hash(req.body.password,salt ,(err,hashedPwd)=>
                {    
                    newUser.password=hashedPwd
                        console.log(newUser)
                    newUser.save();
                })
                let payload={
                    userId : newUser._id
                }
                jwt.sign(payload, process.env.SECRET_KEY,(err,token)=>{
                    if (err){
                        throw err
                    }
                    res.send({token})
                    console.log({'token':token})
                })
            })
        }
    )
   })

module.exports=router;