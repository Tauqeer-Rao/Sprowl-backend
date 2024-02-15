const mongoose = require('mongoose');

// Schema for storing product information
const customerProductSchema = new mongoose.Schema({
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
    },
    brand: {
        type: String,
    },
    affiliate_link: {
        type: String,
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
const CustomerProduct = mongoose.model('CustomerProduct', customerProductSchema);

module.exports = CustomerProduct;