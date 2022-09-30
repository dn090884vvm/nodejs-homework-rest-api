const contactsOperations = require("../../models/contacts");
// const Joi = require("joi");

// const contactSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().trim().email().required(),
//   phone: Joi.string().required(),
// });

const add = async (req, res, next) => {
  const result = await contactsOperations.addContact(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: { result },
  });
};

module.exports = add;
