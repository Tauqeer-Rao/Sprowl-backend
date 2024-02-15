const mongoose = require('mongoose');

// Define the schema for the Users collection
const customerUserSchema = new mongoose.Schema({
    // Define the columns (fields) and their types
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


// Create a Mongoose model based on the schema
const CustomerUser = new mongoose.model('CustomerUser', customerUserSchema);

module.exports = CustomerUser;


