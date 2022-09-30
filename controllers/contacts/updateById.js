const contactsOperations = require("../../models/contacts");
// const Joi = require("joi");
const createError = require("http-errors");

// const contactSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().trim().email().required(),
//   phone: Joi.string().required(),
// });

const updateById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contactsOperations.updateContact(contactId, req.body);
  if (!result) {
    throw createError(404, `Contact with id ${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: { result },
  });
};

module.exports = updateById;
