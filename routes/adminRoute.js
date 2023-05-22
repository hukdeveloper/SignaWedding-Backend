const express = require("express");
const {
  addHostedEventsToUser,
  updateHostedEventsForUser,
  removeHostedEventFromUser,
} = require("../models/adminControllers");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  addHostedEvents,
  getHostedEvents,
} = require("../controllers/hostedEventsController");
const router = express.Router();

router
  .route("/admin/hostedEvent/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), addHostedEventsToUser);
router
  .route("/admin/hostedEvent/:id")
  .delete(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    removeHostedEventFromUser
  );

router
  .route("/admin/hostedEvent/addHostedEvent")
  .post(isAuthenticatedUser, authorizeRoles("admin"), addHostedEvents);

router.route("/admin/hostedEvent").get(isAuthenticatedUser, getHostedEvents);

module.exports = router;
