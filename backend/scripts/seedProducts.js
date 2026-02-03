require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const connectDB = require('../config/db');

const products = [
    {
        id: 1,
        name: "Sharad Seedless",
        desc: "Premium black seedless grapes. Known for their high sugar content, crispy texture, and vibrant purple-black color. The pride of Nashik.",
        pricePerCrate: 159,
        offerPrice: "Offer: 2 Crates for ₹299",
        color1: "#4a148c",
        color2: "#7b1fa2",
        img: "sharad-seedless.png"
    },
    {
        id: 2,
        name: "Thompson Seedless",
        desc: "The classic green favorite. Oval-shaped, sweet-tart flavor balance, and thin skin. Perfect for a refreshing healthy snack.",
        pricePerCrate: 149,
        offerPrice: "Offer: 2 Crates for ₹279",
        color1: "#2e7d32",
        color2: "#66bb6a",
        img: "thompson-seedless.png"
    },
    {
        id: 3,
        name: "Crimson Seedless",
        desc: "Vibrant crimson-red elongated grapes with a firm, crisp texture. Perfectly sweet with a delightful crunch in every bite.",
        pricePerCrate: 169,
        offerPrice: "Offer: 2 Crates for ₹319",
        color1: "#c62828",
        color2: "#ef5350",
        img: "crimson-seedless.png"
    },
    {
        id: 4,
        name: "Manik Chaman",
        desc: "A beautiful elongated variant of the green grape. Extra crunchy and naturally sweet with a distinct golden-green glow.",
        pricePerCrate: 159,
        offerPrice: "Offer: 2 Crates for ₹299",
        color1: "#558b2f",
        color2: "#9ccc65",
        img: "manik-chaman.png"
    },
    {
        id: 5,
        name: "Sonaka",
        desc: "Long, cylindrical green grapes. Known for their thin skin and incredibly sweet juice. Harvested at peak ripeness.",
        pricePerCrate: 149,
        offerPrice: "Offer: 2 Crates for ₹279",
        color1: "#33691e",
        color2: "#7cb342",
        img: "sonaka.png"
    },
    {
        id: 6,
        name: "Red Globe",
        desc: "Large, round, and meaty. While usually seeded, our special crop minimizes seeds and maximizes size and flavor.",
        pricePerCrate: 179,
        offerPrice: "Offer: 2 Crates for ₹339",
        color1: "#b71c1c",
        color2: "#e53935",
        img: "red-globe.png"
    }
];

const seedData = async () => {
    try {
        await connectDB();

        await Product.deleteMany();
        console.log('Data Destroyed...');

        await Product.insertMany(products);
        console.log('Data Imported...');

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedData();
