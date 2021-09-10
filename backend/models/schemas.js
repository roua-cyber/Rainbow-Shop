const mongoose=require('mongoose');
const ownerschema = new mongoose.Schema( {
    name: String,
    dog : {type : mongoose.Types.ObjectId , ref:"Dog"}
  
})
const dogschema = new mongoose.Schema( {
    name: String,
    owner : {type : mongoose.Types.ObjectId , ref:"Owner"}
  
})

const Owner = mongoose.model('owner',ownerschema );
const Dog = mongoose.model('dog', dogschema);
module.exports ={ Owner,Dog};