import * as jwt from '../utils/jwtUtils.js';
import { JWT_SECRET } from '../constants.js';

export async function auth(req, res, next) {
    let token = req.headers['x-parse-session-token'];

    if (token) {
        try {
            const decoded = await jwt.verify(token, JWT_SECRET);
            req.user = decoded;
            return next();
        } catch (error) {
            res.status(401).json({ message: 'You are not authorized!' });
        }
    }

    next();
}

// TODO: Route Guards
// isAuth

// isGuest

// isAdmin