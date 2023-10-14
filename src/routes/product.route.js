const router = require('express').Router();
const productController = require('../controllers/product.controller');
const { auth, isAdmin } = require('../middlewares/auth');

router.get('/', productController.getProducts);
router.get('/last-added', productController.getLastAdded);
router.post('/',auth, isAdmin, productController.createProduct);
router.get('/:id', productController.getProductById);

module.exports = router;