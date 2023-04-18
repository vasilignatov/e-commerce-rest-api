import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    address: String,
    onDelivery: String,
    grandTotal: Number,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Order = mongoose.model('Order', orderSchema);
export default Order;