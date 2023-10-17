const router = require('express').Router();
const whishlistController = require('../controllers/whishlist.controller')

router.get('/', whishlistController.getWhishlist);
router.post('/', whishlistController.addToWhishlist);
router.delete('/', whishlistController.removeFromWhishlist);

module.exports = router;