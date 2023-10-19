const httpStatus = require('http-status');
const router = require('express').Router();

const { auth } = require('../middlewares/auth');
const userController = require('./user.route');
const authController = require('./auth.route');
const teamController = require('./team.route');
const productController = require('./product.route');
const orderController = require('./order.route');
const whishlistController = require('./whishlist.route');
const AppError = require('../utils/AppError');

router.use((req, res, next) => {
    console.log(req.method, ' -> ', req.url);
    next();
});

router.use('/users', userController);
router.use('/auth', authController);
router.use('/team', teamController);
router.use('/products', productController);
router.use('/orders', auth, orderController);
router.use('/whishlist', auth, whishlistController);

router.all('*', (req, res, next) => {
    next(new AppError(httpStatus['404'], httpStatus.NOT_FOUND));
});

module.exports = router;