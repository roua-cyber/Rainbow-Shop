const {Owner,Dog}=require('../models/schemas')
const getAll = async (req,res)=>{
    try {
        const Collections= await Collection.find({});
        res.json(Collections);
    } catch (error) {
        console.error(error);
        res.status(500).json({message : "Server Error"});
    }
}
module.exports={getAll }