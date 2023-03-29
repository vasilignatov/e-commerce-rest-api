import Product from '../models/Product.js';

export const getAll = () => Product.find({});

export const create = (data) => Product.create(data);


