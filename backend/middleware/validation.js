const { check, validationResult } = require('express-validator');

// Validation wrapper
const validateOptions = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
};

exports.createOrderValidation = [
    check('customerName', 'Name is required').not().isEmpty(),
    check('phone', 'Phone is required').not().isEmpty(),
    check('address', 'Address is required').not().isEmpty(),
    check('products', 'Products are required and must be an array').isArray({ min: 1 }),
    check('products.*.product', 'Product ID is required').not().isEmpty(),
    check('products.*.quantity', 'Quantity must be at least 1').isInt({ min: 1 }),
    check('amount', 'Amount is required').isNumeric(),
    validateOptions
];

exports.paymentVerificationValidation = [
    check('razorpay_order_id', 'Razorpay Order ID is required').not().isEmpty(),
    check('razorpay_payment_id', 'Razorpay Payment ID is required').not().isEmpty(),
    check('razorpay_signature', 'Razorpay Signature is required').not().isEmpty(),
    validateOptions
];
