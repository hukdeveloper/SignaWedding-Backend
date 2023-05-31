const express = require("express");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  getHostedEvents,
  getHostedEventSingleUser,
  addGuestsToEvent,
  getAllEventGuest,
  removeEventGuest,
  removeHostedEvent,
  updateHostedEvent,
} = require("../controllers/hostedEventsController");

router.route("/admin/hostedEvent").get(getHostedEvents);

// router
//   .route("/admin/hostedEvent/:id")
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), removeHostedEvent);
router.route("/admin/hostedEvent/:id").delete(removeHostedEvent);

router.route("/admin/hostedEvent/:id").put(updateHostedEvent);

router.route("/user/hostedEvents/:id").get(getHostedEventSingleUser);

router.route("/user/hostedEvents/guests/:id").get(getAllEventGuest);
router.route("/user/hostedEvents/guests/:id").delete(removeEventGuest);
router.route("/user/hostedEvents/guest/:id").put(addGuestsToEvent);

// router
//   .route("/user/hostedEvent/reservedGuest/:id")
//   .post(isAuthenticatedUser, addReservedGuest);

// router
//   .route("/user/hostedEvent/reservedGuests/:id")
//   .get(isAuthenticatedUser, reservedGuestsList);

module.exports = router;
