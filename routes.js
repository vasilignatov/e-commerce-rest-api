import { Router } from 'express';
import authController from './controllers/auth-controller.js';
import teamController from './controllers/team-controller.js';
import productController from './controllers/product-controller.js';

const routes = Router();

routes.use('/users', authController);
routes.use('/team', teamController);
routes.use('/products', productController);


export default routes;