const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`\n================================`);
        console.log(`💚 MongoDB Connected: ${conn.connection.host}`);
        console.log(`================================\n`);
    } catch (error) {
        console.error(`\n================================`);
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        console.error(`================================\n`);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
