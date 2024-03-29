const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

module.exports = {
    development: {
        PORT: 3000,
        MONGODB_URL: 'mongodb://localhost:27017/e-commerce-react',
        JWT_SECRET: '88819a11e0d24153de4fbe9c0b9d3206ea3ac16905bd6b44b7b6d11fc0863751a1ca4467ade1ff42fce5d0ecd7474d2913209127ccbc09356fde662b91f40360',
        SALT_ROUNDS: 1,
        JWT_ACCESS_EXPIRATION_MINUTES: 30,
        JWT_REFRESH_EXPIRATION_DAYS: 30
    },
    production: {
        PORT: process.env.PORT,
        MONGODB_URL: process.env.MONGODB_URL,
        JWT_SECRET: process.env.JWT_SECRET,
        SALT_ROUNDS: process.env.SALT_ROUNDS,
        JWT_ACCESS_EXPIRATION_MINUTES: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
        JWT_REFRESH_EXPIRATION_DAYS: process.env.JWT_REFRESH_EXPIRATION_DAYS
    },
    env: process.env.NODE_ENV
}