const Product = require('../models/Product');

// @desc    Fetch all available products
// @route   GET /api/products
// @access  Public
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find().sort({ id: 1 });
        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Add new product (Admin)
// @route   POST /api/products
// @access  Public (should be Protected in real app)
exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);

        res.status(201).json({
            success: true,
            data: product
        });
    } catch (err) {
        next(err);
    }
};
