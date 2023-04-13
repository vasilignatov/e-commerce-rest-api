import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import routes from '../routes.js';
import { requestLogger } from '../middlewares/requestLogгer.js'
import { auth } from '../middlewares/authMiddleware.js';

export default function expressConfig(server) {
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(cors());
    server.use(requestLogger);
    server.use(cookieParser());
    server.use(routes);
    server.use(auth)
}