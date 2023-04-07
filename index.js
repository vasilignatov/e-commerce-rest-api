import express from 'express';

import expressConfig from './config/express-config.js';
import { configEnv } from './config/config.js';
import dbConfig from './config/mongoose-config.js';

const env = process.env.NODE_ENV || 'development';
const config = configEnv[env];

const server = express();

expressConfig(server);


dbConfig(config.DB_CONNECTION_STRING)
    .then(() => {
        server.listen(config.PORT, () => { console.log(`Server is listening on PORT: http://localhost:${config.PORT}`) });
    })
    .catch(err => {
        console.log('DB CONNECTION ERROR: ', err);
    });