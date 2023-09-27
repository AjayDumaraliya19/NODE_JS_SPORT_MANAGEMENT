const express = require("express");
const { tournamentValidation } = require("../../validations");
const { tournamentController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Tournament Route */
router.post(
  "/create_tournament",
  validate(tournamentValidation.createTournament),
  tournamentController.createTournament
);

/** Get Tournament list Route */
router.get(
  "/tournament_list",
  validate(tournamentValidation.getTournamentList),
  tournamentController.getTournamentList
);

/** Get Tournament by Id Route */
router.get(
  "/tournament_details/:tournamentId",
  validate(tournamentValidation.getTournamentById),
  tournamentController.getTournamentById
);

/** Tournament details update by Id Route */
router.put(
  "/update_tournament/:tournamentId",
  validate(tournamentValidation.updateTournament),
  tournamentController.updateTournament
);

/** Delete Tournament details Route */
router.delete(
  "/delete_tournament/:tournamentId",
  validate(tournamentValidation.getTournamentById),
  tournamentController.deleteTournament
);

module.exports = router;
