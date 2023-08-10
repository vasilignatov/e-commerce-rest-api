const Order = require('../models/Order.js');

exports.create = (data) => Order.create(data);

exports.getAll = () => Order.find({});
