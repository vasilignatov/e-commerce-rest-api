import User from '../models/User.js';
import Product from '../models/Product.js';

export const getWhishlist = (userId) => {
    return User
        .findById(userId);
        // .populate('whishlist')
} 
export const addToWhishlist = async (userId, productId) => {
    const user = await User.findById(userId);
    const product = await Product.findById(productId);
    
    user.whishlist.push(product);

    user.save();
} 