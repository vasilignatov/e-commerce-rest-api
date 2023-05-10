import { raw, Router } from 'express';
import * as whishlistService from '../services/whishlist-service';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const orders = await whishlistService.getWhishlist();
        res.json(orders);
    } catch (error) {
        res
            .status(500)
            .json({ message: error });
    }
});

router.post('/', (req, res) => {

});

export default router;