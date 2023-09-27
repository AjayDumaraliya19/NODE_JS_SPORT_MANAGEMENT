const Joi = require("joi");

/** Create Player Validation */
const createPlayer = {
  body: Joi.object().keys({
    first_name: Joi.string().trim().required(),
    last_name: Joi.string().trim().required(),
    email: Joi.string().trim().required(),
    phone_no: Joi.string().trim().required(),
    specification: Joi.string().trim().required(),
    coach: Joi.string().trim().required(),
  }),
};

/** Get Player list validation */
const getPlayerList = {
  query: Joi.object().keys(),
};

/** Get Player by Id validation */
const getPlayerById = {
  param: Joi.object().keys(),
};

/** Player detials update by Id validation */
const updatePlayer = {
  param: Joi.object().keys(),
  body: Joi.object().keys({
    first_name: Joi.string().trim().required(),
    last_name: Joi.string().trim().required(),
    email: Joi.string().trim().required(),
    phone_no: Joi.string().trim().required(),
    specification: Joi.string().trim().required(),
    coach: Joi.string().trim().required(),
  }),
};

module.exports = {
  createPlayer,
  getPlayerList,
  getPlayerById,
  updatePlayer,
};
