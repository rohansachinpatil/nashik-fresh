const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true,
        unique: true
    },
    desc: {
        type: String,
        required: [true, 'Please add a description']
    },
    pricePerCrate: {
        type: Number,
        default: 159
    },
    offerPrice: {
        type: String,
        default: 'Offer: 2 Crates for ₹299'
    },
    img: {
        type: String,
        required: true
    },
    color1: {
        type: String,
        required: true
    },
    color2: {
        type: String,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);
