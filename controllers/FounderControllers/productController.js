const Product = require('../../models/FounderModels/productSchema');


exports.createProduct = async (req, res) => {
    try {
        console.log("Request arrived in create product", req.body);
        const { productName, subtext, description, price, localization, user } = req.body;

        const newProduct = new Product({
            productName,
            subtext,
            description,
            price,
            localization,
            user,
            created_at: new Date(),
        });

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
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get a single product by ID
exports.getProductById = async (req, res) => {
    try {
        console.log("Request arrived in get product by id", req.body);
        const product = await Product.findById(req.params.productId);
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

        const updatedProduct = {
            name: req.body?.productName,
            subtext: req.body?.subtext,
            description: req.body?.description,
            price: req?.body?.price,
            old_price: req?.body?.old_price,
            localization: req?.body?.localization,
            created_at: new Date(),
        };

        const product = await Product.findByIdAndUpdate(req.params.productId, updatedProduct, { new: true });
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

        const product = await Product.findByIdAndDelete(req.params.productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};