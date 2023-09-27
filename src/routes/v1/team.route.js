const express = require("express");
const { teamValidation } = require("../../validations");
const { teamController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Team Route */
router.post(
  "/create_team",
  validate(teamValidation.createTeam),
  teamController.createTeam
);

/** Get Team list Route */
router.get(
  "/team_list",
  validate(teamValidation.getTeamList),
  teamController.getTeamList
);

/** Get Team by Id Route */
router.get(
  "/team_details/:teamId",
  validate(teamValidation.getTeamById),
  teamController.getTeamById
);

/** Team details update by Id Route */
router.put(
  "/update_team/:teamId",
  validate(teamValidation.updateTeam),
  teamController.updateTeam
);

/** Delete Team details Route */
router.delete(
  "/delete_team/:teamId",
  validate(teamValidation.getTeamById),
  teamController.deleteTeam
);

module.exports = router;
