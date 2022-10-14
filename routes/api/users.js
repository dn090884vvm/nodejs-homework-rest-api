const express = require("express");

const {
  ctrlWrapper,
  isValidId,
  auth,
  validation,
} = require("../../middlewares");
const { joiUpdateSubscriptionSchema } = require("../../models/user");

const { users: ctrl } = require("../../controllers");

const router = express.Router();
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.patch(
  "/",
  auth,
  validation(joiUpdateSubscriptionSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

module.exports = router;
