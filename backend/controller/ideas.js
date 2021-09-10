const Ideas=require('../models/Ideas')
const getAll = async (req,res)=>{
    try {
        const ideas= await Ideas.find({});
        res.json(ideas);
    } catch (error) {
        console.error(error);
        res.status(500).json({message : "Server Error"});
    }
}
module.exports={getAll }