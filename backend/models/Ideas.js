const mongoose=require('mongoose');
const ideaSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
}
)

const Ideas  = mongoose.model('idea',ideaSchema);
module.exports = Ideas ;