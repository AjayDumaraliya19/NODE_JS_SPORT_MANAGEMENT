const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** Create User Route */
router.post(
  "/create_user",
  auth(),
  validate(userValidation.createUser),
  userController.createUser
);

/** Get User list Route */
router.get(
  "/user_list",
  validate(userValidation.getUserList),
  userController.getUserList
);

/** Get user by Id Route */
router.get(
  "/user_details/:userId",
  validate(userValidation.getUserById),
  userController.getUserById
);

/** User details update by Id Route */
router.put(
  "/update_user/:userId",
  validate(userValidation.updateUser),
  userController.updateUser
);

/** Delete User details Route */
router.delete(
  "/delete_user/:userId",
  validate(userValidation.getUserById),
  userController.deleteUser
);

/** Send mail */
router.post(
  "/send-mail",
  validate(userValidation.sendMail),
  userController.sendMail
);

module.exports = router;
