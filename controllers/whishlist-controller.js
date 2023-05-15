import { Router } from 'express';
import * as whishlistService from '../services/whishlist-service.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        console.log(req.user);

        // const whishlist = await whishlistService.getWhishlist(req.user._id);
        // res.json(whishlist);
        res.send(req.user);
        res.status(200)
    } catch (error) {
        res
            .status(500)
            .json({ message: 'Error: ' + error.message, error });
    }
});

router.post('/', async(req, res) => {
    try {
        const userId = req.user._id;
        const productId = req.body;
        console.log(userId, productId);
        const item = await whishlistService.addToWhishlist(userId, productId);
        res
            .status(201)
            .json({
                message: 'Successfuly added to whishlist!',
                item
            });
    } catch (error) {
        res
            .status(500)
            .json({ message: 'Error: ' + error.message, error });
    }
});

export default router;