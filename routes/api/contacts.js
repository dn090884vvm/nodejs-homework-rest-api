const express = require("express");
// const createError = require("http-errors");
// const contactsOperations = require("../../models/contacts");
// const Joi = require("joi");

const { validation, ctrlWrapper } = require("../../middlewares");
const { contactSchema } = require("../../schemas");
const { contacts: ctrl } = require("../../controllers");

const validateMiddleware = validation(contactSchema);

// const contactSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().trim().email().required(),
//   phone: Joi.string().required(),
// });

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validateMiddleware, ctrlWrapper(ctrl.add));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.put("/:contactId", validateMiddleware, ctrlWrapper(ctrl.updateById));

module.exports = router;
