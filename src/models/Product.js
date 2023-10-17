const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    soldCount: {
        type: Number,
        default: 0
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    category: {
        type: String,
        enum: ['top', 'bottom', 'accessories']
    },
    subCategory: {
        type: String,
        enum: ['jackets', 'shirts', 't-shirts', 'pants', 'dresses', 'jeans', 'sweaters', 'skirts']
    },
    sizesAvailable: {
        'XS': Boolean,
        'S': Boolean,
        'M': Boolean,
        'L': Boolean,
        'XL': Boolean,
        'XXL': Boolean
    },
    stock: Boolean,
    description: String,
    images: [String]
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;