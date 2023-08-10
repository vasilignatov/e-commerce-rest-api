const router = require('express').Router();
const teamController = require('../controllers/team.controller');


router.get('/', teamController.getTeam);


module.exports = router;