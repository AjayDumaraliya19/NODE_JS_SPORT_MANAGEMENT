const Joi = require("joi");

/** Create jsonwebToken */
const generateToken = {
  body: Joi.object({
    user: Joi.string().required().trim(),
  }),
};

module.exports = {
  generateToken,
};
