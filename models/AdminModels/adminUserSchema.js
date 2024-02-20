const mongoose = require('mongoose');

// Define the schema for the Users collection
const adminUserSchema = new mongoose.Schema({
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
    isSuperAdmin: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


// Create a Mongoose model based on the schema
const AdminUser = new mongoose.model('AdminUser', adminUserSchema);

module.exports = AdminUser;


