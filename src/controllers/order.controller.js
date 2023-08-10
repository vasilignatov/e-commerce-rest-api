const httpStatus = require('http-status');
const orderService = require('../services/orders-service.js');
const catchAsync = require('../utils/catchAsync.js');

const getAll = catchAsync(async (req, res) => {
    const orders = await orderService.getAll();
    res.json(orders);
});

const create = catchAsync(async (req, res) => {
    const { data, userId } = req.body;
    await orderService.create({ ...data, userId });
    res
        .status(httpStatus.CREATED)
        .json({ message: httpStatus['201_MESSAGE'] });
});


module.exports = {
    getAll,
    create
}