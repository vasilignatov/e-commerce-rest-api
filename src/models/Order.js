const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    address: String,
    status: {
        type: String,
        enum: ['shipped', 'pending', 'recived', 'completed'],
        default: 'pending'
    },
    grandTotal: Number,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items: Array
},{
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;