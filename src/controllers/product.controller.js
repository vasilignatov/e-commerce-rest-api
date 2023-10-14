const router = require('express').Router();
const productService = require('../services/product-service.js');
const catchAsync = require('../utils/catchAsync.js');

exports.getProducts = catchAsync(async (req, res) => {
    const products = await productService.getAll();
    res.json(products);
});

exports.createProduct = catchAsync(async (req, res) => {
    await productService.create(req.body);
    res
        .status(201)
        .json({ message: 'Product created!' });
});

exports.getProductById = catchAsync(async (req, res) => {
    const product = await productService.getById(req.params.id);
    res.json(product);
});

exports.getLastAdded = catchAsync(async (req, res) => {
    const products = await productService.getLastAdded();
    console.log(products);
    res.json(products);
});
