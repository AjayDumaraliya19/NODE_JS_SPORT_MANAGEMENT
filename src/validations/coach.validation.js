const Joi = require("joi");

/** Create Coach Validation */
const createCoach = {
  body: Joi.object().keys({
    coach_name: Joi.string().required().trim(),
    speciality: Joi.string().required().trim(),
  }),
};

/** Get Coach list validation */
const getCoachList = {
  query: Joi.object().keys(),
};

/** Get Coach by Id validation */
const getCoachById = {
  param: Joi.object().keys(),
};

/** Coach detials update by Id validation */
const updateCoach = {
  param: Joi.object().keys(),
  body: Joi.object().keys({
    coach_name: Joi.string().required().trim(),
    speciality: Joi.string().required().trim(),
  }),
};

module.exports = {
  createCoach,
  getCoachList,
  getCoachById,
  updateCoach,
};
