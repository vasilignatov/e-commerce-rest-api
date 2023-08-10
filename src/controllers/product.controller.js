const router = require('express').Router();
const productService = require('../services/product-service.js');
const catchAsync = require('../utils/catchAsync.js');

const getProducts = catchAsync(async (req, res) => {
    const products = await productService.getAll();
    res.json(products);
});

const createProduct = catchAsync(async (req, res) => {
    await productService.create(req.body);
    res
        .status(201)
        .json({ message: 'Product created!' });
});

const getProductById = catchAsync(async (req, res) => {
    const product = await productService.getById(req.params.id);
    res.json(product);
});


module.exports = {
    getProducts,
    createProduct,
    getProductById
}