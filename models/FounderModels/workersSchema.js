const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    // Add other worker-specific fields as needed
});

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;
