const express=require('express');
const router=express.Router()
const authMiddleware=require('../helpers/authMiddleware');
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const Post = require('../models/Post');

//add new post
router.post('/',authMiddleware,(req,res)=>{
    let newPost=new Post({...req.body,owner:req.userId})
    newPost.save()
    .then(post=>res.status(201).send(post))
    .catch(err=>{
        console.error(err.message)
        res.status(500).json({msg :'server error'})
    })

})
//get all post
router.get('/',authMiddleware,(req,res)=>{
    Post.find()
    .then(post=>res.send(posts))
    .catch(err=>{
        console.error(err.message)
        res.status(500).json({msg :'server error'})
    })

})
//Get user posts
router.get('/myPosts',authMiddleware,(req,res)=>{
    Post.find({owner:req.userId})
    .then(post=>res.send(posts))
    .catch(err=>{
        console.error(err.message)
        res.status(500).json({msg :'server error'})
    })

})


module.exports=router