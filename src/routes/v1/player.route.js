const express = require("express");
const { playerValidation } = require("../../validations");
const { playerController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Player Route */
router.post(
  "/create_player",
  validate(playerValidation.createPlayer),
  playerController.createPlayer
);

/** Get Player list Route */
router.get(
  "/player_list",
  validate(playerValidation.getPlayerList),
  playerController.getPlayerList
);

/** Get Player by Id Route */
router.get(
  "/player_details/:playerId",
  validate(playerValidation.getPlayerById),
  playerController.getPlayerById
);

/** Player details update by Id Route */
router.put(
  "/update_player/:playerId",
  validate(playerValidation.updatePlayer),
  playerController.updatePlayer
);

/** Delete Player details Route */
router.delete(
  "/delete_player/:playerId",
  validate(playerValidation.getPlayerById),
  playerController.deletePlayer
);

module.exports = router;
