import * as teamService from '../services/team-service.js';
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const team = await teamService.getTeam();
        res.json(team);
    } catch (error) {
        console.log(error);
        res.json({ error })
    }
});



export default router;