const httpStatus = require('http-status');
const whishlistService = require('../services/whishlist.service.js');
const catchAsync = require('../utils/catchAsync.js');

const getWhishlist = catchAsync(async (req, res) => {
    const whishlist = await whishlistService.getWhishlist(req.user._id);
    res
        .status(httpStatus.OK)
        .json(whishlist);
});

const addToWhishlist = catchAsync(async (req, res) => {
    const userId = req.user._id;
    const { productId } = req.body;
    const item = await whishlistService.addToWhishlist(userId, productId);

    res
        .status(httpStatus.CREATED)
        .json({
            message: 'Successfuly added to whishlist!',
            item
        });
});

const removeFromWhishlist = catchAsync(async (req, res) => {
    const userId = req.user._id;
    const { productId } = req.body;
    const item = await whishlistService.removeFromWhishlist(userId.toString(), productId);
    res.json({ removed: true })
});


module.exports = {
    getWhishlist,
    addToWhishlist,
    removeFromWhishlist
};