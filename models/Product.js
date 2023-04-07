import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    soldCount: {
        type: Number,
        default: 0
    },
    sex: {
        type: String,
        enum: ['male', 'female']
    },
    category: {
        type: String,
        enum: ['top', 'bottom', 'accessories']
    },
    subCategory: {
        type: String,
        enum: ['jackets', 'shirts', 't-shirts', 'jackets', '']
    },
    sizesAvailable: {
        'XS': Boolean, 
        'S': Boolean, 
        'M': Boolean, 
        'L': Boolean, 
        'XL': Boolean, 
        'XXL': Boolean
    },
    description: String,
    images: [String]
});

const Product = mongoose.model('Product', productSchema);
export default Product;