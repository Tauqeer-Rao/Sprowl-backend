const mongoose = require('mongoose');

// Schema for storing product information
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    subtext: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
    },
    localization: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

// Create a Mongoose model based on the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
