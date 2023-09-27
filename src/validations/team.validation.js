const Joi = require("joi");

/** Create Team Validation */
const createTeam = {
  body: Joi.object().keys({
    team_name: Joi.string().trim().required(),
    members: Joi.number().integer().required(),
    player: Joi.string().trim().required(),
    sport_type: Joi.string().trim().required(),
  }),
};

/** Get Team list validation */
const getTeamList = {
  query: Joi.object().keys(),
};

/** Get Team by Id validation */
const getTeamById = {
  param: Joi.object().keys(),
};

/** Team detials update by Id validation */
const updateTeam = {
  param: Joi.object().keys(),
  body: Joi.object().keys({
    team_name: Joi.string().trim().required(),
    members: Joi.number().integer().required(),
    player: Joi.string().trim().required(),
    sport_type: Joi.string().trim().required(),
  }),
};

module.exports = {
  createTeam,
  getTeamList,
  getTeamById,
  updateTeam,
};
