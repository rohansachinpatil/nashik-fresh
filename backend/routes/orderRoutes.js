const express = require("express");
const {
    createOrder,
    getOrder,
    updateOrderToPaid
} = require("../controllers/orderController");

const router = express.Router();

router.post("/", createOrder);
router.get("/:id", getOrder);
router.put("/:id/pay", updateOrderToPaid);

module.exports = router;
