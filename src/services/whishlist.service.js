const User = require('../models/User.js');
const Product = require('../models/Product.js');
const Whishlist = require('../models/Whishlist.js');
const AppError = require('../utils/AppError.js');
const httpStatus = require('http-status');


exports.getWhishlist = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new AppError('User not found', httpStatus.NOT_FOUND);
    }
    return Whishlist
        .find({ userId })
        .populate('productId')
        .lean();
}

exports.addToWhishlist = async (userId, productId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new AppError('User not found', httpStatus.NOT_FOUND);
    }

    const product = await Product.findById(productId);
    if (!product) {
        throw new AppError('Product not found', httpStatus.NOT_FOUND);
    }

    return Whishlist.create({ userId, productId });
}

exports.removeFromWhishlist = async (userId, productId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new AppError('User not found', httpStatus.NOT_FOUND);
    }

    const product = await Product.findById(productId);
    if (!product) {
        throw new AppError('Product not found', httpStatus.NOT_FOUND);
    }
    const params = { userId, productId }
    return Whishlist.deleteOne(params);
}