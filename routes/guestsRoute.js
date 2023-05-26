const express = require("express");
const { addGuests } = require("../controllers/guestsController");
const { addReservedGuest } = require("../controllers/reservedGuestController");

const router = express.Router();

router.route("/guest").post(addGuests);

// For Reserved Guests

router.route("/guest/hostedEvent/reservedGuests/:id").post(addReservedGuest);

module.exports = router;
