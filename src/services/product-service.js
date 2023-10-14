const Product = require('../models/Product.js');

exports.create = (data) => Product.create(data);

exports.getAll = () => Product.find({});

exports.getById = (id) => Product.findById(id);

exports.getLastAdded = () => {
    return Product
        .find({})
        .sort({createdAt: -1})
        .limit(3);
}