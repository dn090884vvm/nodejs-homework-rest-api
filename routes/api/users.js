const express = require("express");

const {
  upload,
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
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
