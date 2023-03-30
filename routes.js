import { Router } from 'express';
import teamController from './controllers/team-controller.js';
import productController from './controllers/product-controller.js';

const routes = Router();

routes.use('/team', teamController);
routes.use('/products', productController);


export default routes;