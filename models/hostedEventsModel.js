const mongoose = require("mongoose");

const hostedEventsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter the title"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  passcode: {
    type: Number,
    maxLength: 6,
    required: [true, "Please Enter the Passcode"],
  },
});

module.exports = mongoose.model("HostedEvents", hostedEventsSchema);
