const mongoose=require('mongoose');
const collectionSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },

}
)

const Collection = mongoose.model('collections',collectionSchema);
module.exports = Collection;