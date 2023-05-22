const express = require("express");
const { addGuests } = require("../controllers/guestsController");

const router = express.Router();

router.route("/guest").post(addGuests);

module.exports = router;
