const mongoose = require('mongoose')

const trailerSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, 'Please enter trailer info']
    },
    status: {
        type: String,
        required: [true, 'Please enter status']
    },
    location: {
        type: String,
        required: [true, 'Please enter location']
    },
    orderNumber: {
        type: String
    },
    checked: {
        type: Boolean
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Trailer', trailerSchema)