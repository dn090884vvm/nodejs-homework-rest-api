const Joi = require("joi");

// const pattern = "^+d{2} (d{3}) d{3}-d{2}-d{2}$";

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().trim().email().required(),
  // phone: Joi.string().required(),

  phone: Joi.string()
    .regex(/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/)
    .required(),
  // phone: Joi.string()
  //   .regex(/\^+\d{2}-\d{3}-\d{2}-\d{2}-\d{2}$/)
  //   .required(),
});

module.exports = contactSchema;
