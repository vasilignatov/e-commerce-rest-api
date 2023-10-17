const httpStatus = require('http-status');

const teamService = require('../services/team.service.js');
const catchAsync = require('../utils/catchAsync.js');

const getTeam = catchAsync(async (req, res) => {
        const team = await teamService.getTeam();
        res
            .status(httpStatus.OK)
            .json(team);
});

module.exports = {
    getTeam,

}