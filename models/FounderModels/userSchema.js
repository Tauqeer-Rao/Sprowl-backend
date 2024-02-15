const mongoose = require('mongoose');

// Define the schema for the Users collection
const userSchema = new mongoose.Schema({
    // Define the columns (fields) and their types
    fullname: {
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
    address: {
        type: String,
    },
    image: {
        type: Buffer,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    // Reference to workers
    workers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Worker',
    }],
});


// Create a Mongoose model based on the schema
const User = new mongoose.model('User', userSchema);

module.exports = User;
