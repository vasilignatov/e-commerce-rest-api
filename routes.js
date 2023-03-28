import { Router } from 'express';
import teamController from './controllers/team-controller.js';
const routes = Router();


routes.use('/team', teamController);


export default routes;