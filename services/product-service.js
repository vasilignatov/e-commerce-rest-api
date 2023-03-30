import Product from '../models/Product.js';

export const create = (data) => Product.create(data);

export const getAll = () => Product.find({});

export const getById = (id) => Product.findById(id);

