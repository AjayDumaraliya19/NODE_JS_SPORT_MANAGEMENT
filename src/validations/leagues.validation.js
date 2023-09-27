const Joi = require("joi");

/** Create Leagues Validation */
const createLeag = {
  body: Joi.object().keys({
    leagues_name: Joi.string().trim().required(),
    leagues_time: Joi.date().required(),
    team: Joi.string().trim().required(),
  }),
};

/** Get Leagues list validation */
const getLeagList = {
  query: Joi.object().keys(),
};

/** Get Leagues by Id validation */
const getLeagById = {
  param: Joi.object().keys(),
};

/** Leagues detials update by Id validation */
const updateLeag = {
  param: Joi.object().keys(),
  body: Joi.object().keys({
    leagues_name: Joi.string().trim().required(),
    leagues_time: Joi.date().required(),
    team: Joi.string().trim().required(),
  }),
};

module.exports = {
  createLeag,
  getLeagList,
  getLeagById,
  updateLeag,
};
