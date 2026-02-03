const crypto = require('crypto');
const razorpay = require('../utils/razorpay');
const Order = require('../models/Order');

// @desc    Create Razorpay Order
// @route   POST /api/payment/create-order
// @access  Public
exports.createPaymentOrder = async (req, res, next) => {
    try {
        const { amount, receipt } = req.body;

        const options = {
            amount: amount * 100, // Convert rupees to paise
            currency: 'INR',
            receipt: receipt ? receipt.toString() : undefined
        };

        const order = await razorpay.orders.create(options);

        res.status(200).json({
            success: true,
            id: order.id,
            amount: order.amount,
            currency: order.currency
        });
    } catch (err) {
        console.error('Razorpay Error:', err);
        next(err);
    }
};

// @desc    Verify Razorpay Payment
// @route   POST /api/payment/verify
// @access  Public
exports.verifyPayment = async (req, res, next) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, order_db_id } = req.body;

        const body = razorpay_order_id + '|' + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest('hex');

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            if (order_db_id) {
                await Order.findByIdAndUpdate(order_db_id, {
                    paymentStatus: 'paid',
                    paymentId: razorpay_payment_id
                });
            }

            res.status(200).json({
                success: true,
                message: 'Payment verified and order updated'
            });
        } else {
            res.status(400).json({
                success: false,
                error: 'Invalid signature'
            });
        }
    } catch (err) {
        next(err);
    }
};
