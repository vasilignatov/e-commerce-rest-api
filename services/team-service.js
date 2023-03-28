import Team from '../models/Team.js'

export const getTeam = () => Team.find({});

export const createTeam = (data) => Team.create(data);
