const router = require('express').Router();
const productController = require('../controllers/product.controller');
const { auth, isAdmin } = require('../middlewares/auth');

router.get('/', productController.getProducts);
router.get('/last-added', productController.getLastAdded);
router.get('/get-products-categories', productController.getProductsCategoriesInfo);
router.post('/', productController.createProduct);
router.get('/:id', productController.getProductById);

module.exports = router;