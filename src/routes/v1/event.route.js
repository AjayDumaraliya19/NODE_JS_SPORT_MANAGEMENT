const express = require("express");
const { eventValidation } = require("../../validations");
const { eventController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Event Route */
router.post(
  "/create_event",
  validate(eventValidation.createEvent),
  eventController.createEvent
);

/** Get Event list Route */
router.get(
  "/event_list",
  validate(eventValidation.getEventList),
  eventController.getEventList
);

/** Get Event by Id Route */
router.get(
  "/event_details/:eventId",
  validate(eventValidation.getEventById),
  eventController.getEventById
);

/** Event details update by Id Route */
router.put(
  "/update_event/:eventId",
  validate(eventValidation.updateEvent),
  eventController.updateEvent
);

/** Delete Event details Route */
router.delete(
  "/delete_event/:eventId",
  validate(eventValidation.getEventById),
  eventController.deleteEvent
);

module.exports = router;
