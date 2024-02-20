// ebrandController.js

const EBrand = require('../../models/AdminModels/eBrandsSchema');

// Create a new EBrand
exports.createEBrand = async (req, res) => {
    try {
        const ebrand = await EBrand.create(req.body);
        res.status(201).json({ success: true, data: ebrand });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Get all EBrands
exports.getEBrands = async (req, res) => {
    try {
        const ebrands = await EBrand.find();
        console.log(ebrands)
        res.status(200).json({ success: true, data: ebrands });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update an EBrand by ID
exports.updateEBrand = async (req, res) => {
    try {
        const ebrand = await EBrand.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!ebrand) {
            return res.status(404).json({ success: false, message: 'EBrand not found' });
        }
        res.status(200).json({ success: true, data: ebrand });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Delete an EBrand by ID
exports.deleteEBrand = async (req, res) => {
    try {
        const ebrand = await EBrand.findByIdAndDelete(req.params.id);
        if (!ebrand) {
            return res.status(404).json({ success: false, message: 'EBrand not found' });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
