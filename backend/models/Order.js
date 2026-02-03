const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        customerName: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        items: [
            {
                productName: String,
                quantity: Number,
                price: Number
            }
        ],
        totalAmount: {
            type: Number,
            required: true
        },
        paymentStatus: {
            type: String,
            enum: ["pending", "paid"],
            default: "pending"
        },
        paymentId: {
            type: String
        },
        orderStatus: {
            type: String,
            enum: ['placed', 'dispatched', 'delivered', 'cancelled'],
            default: 'placed'
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
