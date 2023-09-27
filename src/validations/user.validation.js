const Joi = require("joi");

/** Create User Validation */
const createUser = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    phone_number: Joi.number().integer().required(),
    password: Joi.string().required(),
  }),
};

/** Get User list validation */
const getUserList = {
  query: Joi.object().keys(),
};

/** Get User by Id validation */
const getUserById = {
  param: Joi.object().keys(),
};

/** User detials update by Id validation */
const updateUser = {
  param: Joi.object().keys(),
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    phone_number: Joi.number().integer().required(),
    password: Joi.string().required(),
  }),
};

/** Send mail */
const sendMail = {
  body: Joi.object({
    email: Joi.string().required().trim().email(),
    subject: Joi.string().required().trim(),
    text: Joi.string().required().trim(),
  }),
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateUser,
  sendMail,
};
