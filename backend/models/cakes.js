const mongoose=require('mongoose');
const cakeSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
}
)

const Cake = mongoose.model('cakes',cakeSchema);
module.exports = Cake;