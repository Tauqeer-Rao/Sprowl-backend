const mongoose = require('mongoose');

// Define the schema for the Users collection
const InvesterUserSchema = new mongoose.Schema({
    // Define the columns (fields) and their types
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


// Create a Mongoose model based on the schema
const InvesterUser = new mongoose.model('InvesterUser', InvesterUserSchema);

module.exports = InvesterUser;
