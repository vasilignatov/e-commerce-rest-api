const Team = require('../models/Team');

exports.getTeam = () => Team.find({});

exports.createTeam = (data) => Team.create(data);
