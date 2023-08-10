import User from '../models/User.js';
import * as jwt from '../utils/jwtUtils.js';
import { JWT_SECRET } from '../constants.js';

export const register = async (userData) => {
    const user = await User.findOne({ email: userData.email });

    if (user) {
        throw { message: 'This email is already taken!' }
    }

    return User.create({ ...userData, role: 'user' });
}

export const login = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw { message: 'Wrong username or password!' }
    }

    try {
        let isValid = await user.validatePassword(password);

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