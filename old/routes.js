import { Router } from 'express';
import authController from './controllers/auth-controller.js';
import teamController from './controllers/team-controller.js';
import productController from './controllers/product-controller.js';
import orderController from './controllers/order-controller.js';
import whishlistController from './controllers/whishlist-controller.js';

const routes = Router();

routes.use('/users', authController);
routes.use('/team', teamController);
routes.use('/products', productController);
routes.use('/orders', orderController);
routes.use('/whishlist', whishlistController);


export default routes;