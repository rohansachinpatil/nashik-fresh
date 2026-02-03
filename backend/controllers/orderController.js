const Order = require("../models/Order");

// CREATE ORDER
const createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        const savedOrder = await order.save();

        res.status(201).json({
            success: true,
            message: "order created successfully",
            order: savedOrder
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// GET ORDER BY ID
const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "order not found"
            });
        }

        res.json({
            success: true,
            order
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// MARK ORDER AS PAID
const updateOrderToPaid = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "order not found"
            });
        }

        order.paymentStatus = "paid";
        order.paymentId = req.body.paymentId;

        const updatedOrder = await order.save();

        res.json({
            success: true,
            message: "order marked as paid",
            order: updatedOrder
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

module.exports = {
    createOrder,
    getOrder,
    updateOrderToPaid
};
