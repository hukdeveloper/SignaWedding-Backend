const mongoose = require("mongoose");

const reservedGuestSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  hostedEventAccess: {
    type: [mongoose.Types.ObjectId],
    required: true,
  },
});

module.exports = mongoose.model("ReservedGuest", reservedGuestSchema);
