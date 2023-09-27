const Joi = require("joi");

/** Create Tournament Validation */
const createTournament = {
  body: Joi.object().keys({
    tournament_name: Joi.string().trim().required(),
    tournament_date: Joi.date().required(),
    orgainzation: Joi.string().trim().required(),
    team: Joi.string().trim().required(),
    player: Joi.string().trim().required(),
  }),
};

/** Get Tournament list validation */
const getTournamentList = {
  query: Joi.object().keys(),
};

/** Get Tournament by Id validation */
const getTournamentById = {
  param: Joi.object().keys(),
};

/** Tournament detials update by Id validation */
const updateTournament = {
  param: Joi.object().keys(),
  body: Joi.object().keys({
    tournament_name: Joi.string().trim().required(),
    tournament_date: Joi.date().required(),
    orgainzation: Joi.string().trim().required(),
    team: Joi.string().trim().required(),
    player: Joi.string().trim().required(),
  }),
};

module.exports = {
  createTournament,
  getTournamentList,
  getTournamentById,
  updateTournament,
};
