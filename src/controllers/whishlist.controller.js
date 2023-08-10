const httpStatus = require('http-status');
const whishlistService = require('../services/whishlist-service.js');
const catchAsync = require('../utils/catchAsync.js');

// TODO
const getWhishlist = catchAsync(async (req, res) => {
    const whishlist = await whishlistService.getWhishlist(req.user._id);
    res
        .status(httpStatus.OK)
        .json(whishlist);
});

// TODO
const addToWhishlist = catchAsync(async (req, res) => {
    const userId = req.user._id;
    const productId = req.body;
    const item = await whishlistService.addToWhishlist(userId, productId);
    res
        .status(httpStatus.CREATED)
        .json({
            message: 'Successfuly added to whishlist!',
            item
        });
});


module.exports = {
    getWhishlist,
    addToWhishlist
};