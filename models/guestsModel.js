const mongoose = require("mongoose");

const guestsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
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
