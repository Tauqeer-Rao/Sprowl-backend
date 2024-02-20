
const mongoose = require('mongoose');

const eBrandSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    jobType: [{
        type: String,
        enum: ['Full Time', 'Part Time', 'Internship']
    }],
    about: {
        type: String,
        required: true
    }
});

const EBrand = mongoose.model('EBrand', eBrandSchema);

module.exports = EBrand;
