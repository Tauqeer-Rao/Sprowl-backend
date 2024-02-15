const CustomerProduct = require('../../models/CustomerModels/customerProductSchema');


exports.createProduct = async (req, res) => {
    try {
        console.log("Request arrived in create product", req.body);
        const newProduct = new CustomerProduct(req.body);
        await newProduct.save();

        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get all products
exports.getAllProducts = async (req, res) => {
    try {
        console.log("Request arrived in get all products", req.body);
        const products = await CustomerProduct.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get a single product by ID
exports.getProductById = async (req, res) => {
    try {
        console.log("Request arrived in get product by id", req.body);
        const product = await CustomerProduct.findById(req.params.productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to update a product by ID with image upload
exports.updateProductById = async (req, res) => {
    try {
        console.log("Request arrived in update product", req.body);
        console.log("Request arrived in update product", req.params);
        const product = await CustomerProduct.findByIdAndUpdate(req.params.productId, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to delete a product by ID
exports.deleteProductById = async (req, res) => {
    try {
        console.log("Request arrived in delete product", req.body);

        const product = await CustomerProduct.findByIdAndDelete(req.params.productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};