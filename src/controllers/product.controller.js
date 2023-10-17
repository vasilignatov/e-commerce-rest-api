const httpStatus = require('http-status');
const productService = require('../services/product.service.js');
const catchAsync = require('../utils/catchAsync.js');


exports.getProducts = catchAsync(async (req, res) => {
    const {gender, category} = req.query;

    let products = await productService.getProducts(gender, category);

    res
        .status(httpStatus.OK)
        .json(products);
});

exports.createProduct = catchAsync(async (req, res) => {
    await productService.create(req.body);
    res
        .status(httpStatus.CREATED)
        .json({ message: 'Product created!' });
});

exports.getProductById = catchAsync(async (req, res) => {
    const product = await productService.getById(req.params.id);
    res
        .status(httpStatus.OK)
        .json(product);
});

exports.getLastAdded = catchAsync(async (req, res) => {
    const products = await productService.getLastAdded();
    res
        .status(httpStatus.OK)
        .json(products);
});

exports.getProductsCategoriesInfo = catchAsync(async (req, res) => {
    const products = await productService.getProductsCategoriesInfo();
    res
        .status(httpStatus.OK)
        .json(products);
});