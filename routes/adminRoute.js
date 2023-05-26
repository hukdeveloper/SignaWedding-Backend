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

router
  .route("/admin/hostedEvent/user/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), addHostedEventsToUser);
router
  .route("/admin/hostedEvent/user/:id")
  .delete(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    removeHostedEventFromUser
  );

router
  .route("/admin/hostedEvent/addHostedEvent")
  .post(isAuthenticatedUser, authorizeRoles("admin"), addHostedEvents);

router.route("/admin/hostedEvent").get(isAuthenticatedUser, getHostedEvents);

router
  .route("/admin/hostedEvent/reservedGuests/:id")
  .get(isAuthenticatedUser, getHostedEventsReservedGuests);

module.exports = router;
