const express=require('express');
const router=express.Router()
const authMiddleware=require('../helpers/authMiddleware');
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


const User=require('../models/User');
require("dotenv").config()

router.get("/",authMiddleware,(req,res)=>{
    User.findById(req.userId).select("-password") .then (user =>{
        if (!user){
            return res.status(404).json({msg :'not found'})
        }
        res.status(200).json(user);
    })
    .catch(err=>{
        console.error(err.message)
        res.status(500).json({msg :'server error'})
    })
})

router.post('/',
   [
    body('email').isEmail(),
    body('password',"enter your password").notEmpty(),
   ] 
   , (req,res)=>{
    const errors =validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    User.findOne({email:req.body.email})
    .then((user)=>{
        if(!user){
            return res.status(404).send({errors : [{msg : "register before"}]})
        }  

        bcrypt.compare(req.body.password,user.password,(err,isMatch)=>{

            if (!isMatch)
            {return res.status(404).send({errors : [{msg : "wrong password"}]})}
            else{
                let payload={
                    userId : user._id
                }              

                jwt.sign(payload, process.env.SECRET_KEY,(err,token)=>{
                    if (err){
                        throw err
                    }
                    res.send({token})
                })
            }
        })
    })
}
)

module.exports=router;