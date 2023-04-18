import { Router } from 'express';
import * as orderService from '../services/orders-service.js';
const router = Router();

router.get('/', async (req, res) => {
    try {
        const orders = await orderService.getAll();
        res.json(orders);
    } catch (error) {
        res
            .status(500)
            .json({ message: error });
    }
});

router.post('/create', async (req, res) => {
    try {
        const { data, userId } = req.body;
        await orderService.create({ ...data, userId });
        res.json({ ok: true });
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ message: error });
    }
});


export default router;