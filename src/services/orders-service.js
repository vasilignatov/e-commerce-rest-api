import Order from '../models/Order.js';

export const create = (data) => Order.create(data);

export const getAll = () => Order.find({});
