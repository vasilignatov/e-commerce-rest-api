const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    jobPosition: String,
    expirence: String,
    imageUrl: {
        type: String,

    },
    social: {
        facebook: String,
        tweeter: String,
        googleplus: String,
        youtube: String
    },
    description: String
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;