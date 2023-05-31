const express = require("express");
const {
  addHostedEventsToUser,
  removeHostedEventFromUser,
} = require("../models/adminControllers");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  addHostedEvents,
  getHostedEvents,
  getHostedEventsReservedGuests,
} = require("../controllers/hostedEventsController");
const router = express.Router();

router.route("/admin/hostedEvent/user/:id").put(addHostedEventsToUser);
router.route("/admin/hostedEvent/user/:id").delete(removeHostedEventFromUser);

router.route("/admin/hostedEvent/addHostedEvent").post(addHostedEvents);

router.route("/admin/hostedEvent").get(getHostedEvents);

router
  .route("/admin/hostedEvent/reservedGuests/:id")
  .get(getHostedEventsReservedGuests);

module.exports = router;
