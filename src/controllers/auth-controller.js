import { Router } from 'express';
import * as authService from '../../old/services/user-service.js';
// import { COOKIE_NAME } from '../constants.js';

const router = Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const { user, token } = await authService.login({ email, password });
        // res.cookie(COOKIE_NAME, token);

        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            token,
        });

    } catch (err) {
        console.log(err)
        res.json({
            type: 'error',
            message: err.message
        })
    }
});

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
        await authService.register({ username, email, password });

        const { user, token } = await authService.login({ email, password });

        // res.cookie(COOKIE_NAME, token);

        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            token,
        });

    } catch (err) {
        console.log('Register error: ', err);
        res.json({
            type: 'error',
            message: err.message
        });
    }
});


router.post('/logout', (req, res) => {  
    
    res.json({ok: true});
});

export default router;