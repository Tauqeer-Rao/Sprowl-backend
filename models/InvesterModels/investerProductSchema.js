const mongoose = require('mongoose');

// Schema for storing product information
const investerProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
    },
    likes: {
        type: Number,
    },
    images: [{
        type: String,
    }],
    created_at: {
        type: Date,
        default: Date.now,
    },
});

// Create a Mongoose model based on the schema
const InvesterProduct = mongoose.model('InvesterProduct', investerProductSchema);

module.exports = InvesterProduct;
