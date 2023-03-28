import express from 'express';
import cors from 'cors';
import routes from '../routes.js';


export default function expressConfig(server) {
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    server.use(cors());
    server.use(routes);
}