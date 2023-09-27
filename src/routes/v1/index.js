const express = require("express");
const userRoute = require("./user.route");
const tokenRoute = require("./token.route");
const bannerRoute = require("./banner.route");
const sportRoute = require("./sport.route");
const coachRoute = require("./sport.route");
const playerRoute = require("./player.route");
const teamRoute = require("./team.route");
const eventRoute = require("./event.route");
const tournamentRoute = require("./tournament.route");
const leaguesRoute = require("./leagues.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/token", tokenRoute);
router.use("/banner", bannerRoute);
router.use("/sport", sportRoute);
router.use("/coach", coachRoute);
router.use("/player", playerRoute);
router.use("/team", teamRoute);
router.use("/event", eventRoute);
router.use("/tournament", tournamentRoute);
router.use("/leagues", leaguesRoute);

module.exports = router;
