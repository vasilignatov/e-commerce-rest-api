import User from '../models/User.js';
import jwt from '../utils/jwtUtils.js';
import { JWT_SECRET } from '../constants.js';

export const register = (userData) => User.create({ ...userData, role: 'user' });

export const login = ({ username, password }) => {
    const user = User.findOne({ username });

    if (!user) {
        throw { message: 'Wrong username or password!' }
    }

    try {
        let isValid = await User.validatePassword(password);

        if (isValid) {
            let payload = {
                _id: user._id,
                email: user.email,
                username: user.username,
                role: user.role
            }

            let token = await jwt.sign(payload, JWT_SECRET);

            return { user, token }

        } else {
            throw {
                type: 'error',
                message: 'Wrong username or password'
            }
        }
    } catch (err) {
        throw {
            type: 'error',
            message: err.message
        }
    }
}