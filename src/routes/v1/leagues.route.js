const express = require("express");
const { leaguesValidation } = require("../../validations");
const { leaguesController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Leagues Route */
router.post(
  "/create_leagues",
  validate(leaguesValidation.createLeag),
  leaguesController.createLeag
);

/** Get Leagues list Route */
router.get(
  "/leagues_list",
  validate(leaguesValidation.getLeagList),
  leaguesController.getLeagList
);

/** Get Leagues by Id Route */
router.get(
  "/leagues_details/:leaguesId",
  validate(leaguesValidation.getLeagById),
  leaguesController.getLeagById
);

/** Leagues details update by Id Route */
router.put(
  "/update_leagues/:leaguesId",
  validate(leaguesValidation.updateLeag),
  leaguesController.updateLeag
);

/** Delete Leagues details Route */
router.delete(
  "/delete_leagues/:leaguesId",
  validate(leaguesValidation.getLeagById),
  leaguesController.deleteLeag
);

module.exports = router;
