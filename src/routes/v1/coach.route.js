const express = require("express");
const { coachValidation } = require("../../validations");
const { coachController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Coach Route */
router.post(
  "/create_coach",
  validate(coachValidation.createCoach),
  coachController.createCoach
);

/** Get Coach list Route */
router.get(
  "/coach_list",
  validate(coachValidation.getCoachList),
  coachController.getCoachList
);

/** Get Coach by Id Route */
router.get(
  "/coach_details/:coachId",
  validate(coachValidation.getCoachById),
  coachController.getCoachById
);

/** Coach details update by Id Route */
router.put(
  "/update_coach/:coachId",
  validate(coachValidation.updateCoach),
  coachController.updateCoach
);

/** Delete Coach details Route */
router.delete(
  "/delete_coach/:coachId",
  validate(coachValidation.getCoachById),
  coachController.deleteCoach
);

module.exports = router;
