const mongoose = require("mongoose");
const validator = require("validator");

const guestsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Please Enter a valid Email"],
      required: true,
    },
    hostedEventAccess: {
      type: [mongoose.Types.ObjectId],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Guest", guestsSchema);
