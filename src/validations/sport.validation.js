const Joi = require("joi");

/** Create Sport Validation */
const createSport = {
  body: Joi.object().keys({
    sport_name: Joi.string().trim().required(),
    sport_category: Joi.string().trim().required(),
  }),
};

/** Get Sport list validation */
const getSportList = {
  query: Joi.object().keys(),
};

/** Get Sport by Id validation */
const getSportById = {
  param: Joi.object().keys(),
};

/** Sport detials update by Id validation */
const updateSport = {
  param: Joi.object().keys(),
  body: Joi.object().keys({
    sport_name: Joi.string().trim().required(),
    sport_category: Joi.string().trim().required(),
  }),
};

module.exports = {
  createSport,
  getSportList,
  getSportById,
  updateSport,
};
