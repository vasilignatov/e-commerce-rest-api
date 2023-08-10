const router = require('express').Router();
const orderController = require('../controllers/order.controller');

router.get('/', orderController.getAll);

router.post('/create', orderController.create);

module.exports = router;

