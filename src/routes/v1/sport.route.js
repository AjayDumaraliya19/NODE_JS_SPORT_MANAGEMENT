const express = require("express");
const { sportValidation } = require("../../validations");
const { sportController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Sport Route */
router.post(
  "/create_sport",
  validate(sportValidation.createSport),
  sportController.createSport
);

/** Get Sport list Route */
router.get(
  "/sport_list",
  validate(sportValidation.getSportList),
  sportController.getSportList
);

/** Get Sport by Id Route */
router.get(
  "/sport_details/:sportId",
  validate(sportValidation.getSportById),
  sportController.getSportById
);

/** Sport details update by Id Route */
router.put(
  "/update_sport/:sportId",
  validate(sportValidation.updateSport),
  sportController.updateSport
);

/** Delete Sport details Route */
router.delete(
  "/delete_sport/:sportId",
  validate(sportValidation.getSportById),
  sportController.deleteSport
);

module.exports = router;
