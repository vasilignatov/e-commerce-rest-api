const httpStatus = require('http-status');
const ordersService = require('../services/orders-service.js');
const catchAsync = require('../utils/catchAsync.js');

const getAll = catchAsync(async (req, res) => {
    const orders = await ordersService.getAll();
    res.json(orders);
});

const getOrderById = catchAsync(async (req, res) => {
    const orderId = req.params.orderId;
    const order = await ordersService.getOrderById(orderId);
    res.json(order);
});

const create = catchAsync(async (req, res) => {
    const { data, userId } = req.body;
    await ordersService.create({ ...data, userId });
    res
        .status(httpStatus.CREATED)
        .json({ message: httpStatus['201_MESSAGE'] });
});


module.exports = {
    getAll,
    create,
    getOrderById
}