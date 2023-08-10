const router = require('express').Router();
const ordersController = require('../controllers/order.controller');

router.get('/', ordersController.getAll);

router.get('/:orderId', ordersController.getOrderById);

router.post('/create', ordersController.create);

module.exports = router;

