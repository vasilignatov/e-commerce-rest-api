import express from 'express';
import cors from 'cors';
import responseDelay from './middlewares/responseDelay.js';
// Data
import team from './data/team.json' assert { type: "json" };


const PORT = process.env.PORT || 5000;
const server = express();

// Server config
server.use(cors());
server.use(responseDelay);



server.get('/team', (req, res) => {
    res.json(team);
});



server.listen(PORT, () => {
    console.log(`Server is listening on: http://localhost:${PORT}`)
});