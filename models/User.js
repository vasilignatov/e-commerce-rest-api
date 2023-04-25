import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from '../constants.js';

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: String,
    whishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, SALT_ROUNDS)
        .then(hash => {
            this.password = hash;
            return next();
        });
});

userSchema.method('validatePassword', function (password) {
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);
export default User;