const User = require('../models/User.js');
const Product = require('../models/Product.js');

// TODO: FIX
exports.getWhishlist = (userId) => {
    return User
    .findById(userId);
    // .populate('whishlist')
}

// TODO: FIX
exports.addToWhishlist = async (userId, productId) => {
    const user = await User.findById(userId);
    const product = await Product.findById(productId);

    user.whishlist.push(product);

    user.save();
}