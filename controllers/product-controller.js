import { Router } from 'express';
import * as productService from '../services/product-service.js';

const router = Router();

// GET ALL 
router.get('/', async (req, res) => {
    try {
        const products = await productService.getAll();
        res.json(products);
    } catch (error) {
        res
            .statusCode(500)
            .json({ message: error });
    }
});

// Only Admin and authorized employees can creatr products(NOT guests and users)
// TODO: Route guards
router.post('/', async (req, res) => {
    try {
        await productService.create(req.body);
        res.status(201).json({message: 'Product created!'});
    } catch (error) {
        res
        .status(500)
        .json({ message: error });
    }
});

//GET BY ID
router.get('/:id', async (req, res) => {
    try {
        const product = await productService.getById(req.params.id);
        res.json(product);
    } catch (error) {
        res
            .status(500)
            .json({ error });
    }
});


export default router;