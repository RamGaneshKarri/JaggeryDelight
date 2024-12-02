const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users", // Reference to the Users collection
        required: true,
    },
    items: [
        {
            productName: String,
            price: Number,
            quantity: Number,
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    paymentMode: {
        type: String,
        enum: ["Cash on Delivery", "Online"],
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const OrdersModel = mongoose.model("Orders", OrdersSchema);
module.exports = OrdersModel;
