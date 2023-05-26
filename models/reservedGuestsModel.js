const mongoose = require("mongoose");
const validator = require("validator");

const reservedGuestSchema = new mongoose.Schema({
  knwoAbout: {
    type: String,
    required: [true, "Please select one option must"],
  },
  totalPassengers: {
    type: Number,
    required: [true, "Enter passengers number"],
  },
  passengerTitle: {
    type: String,
    required: [true, "Enter passengers title"],
  },
  firstName: {
    type: String,
    required: [true, "Must enter first name"],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, "Must enter last name"],
  },
  suffix: {
    type: String,
    required: [true, "Must have suffix"],
  },
  passengersDob: {
    type: String,
    required: [true, "Must enter date of birth"],
  },
  gender: {
    type: String,
  },
  passportNum: {
    type: String,
  },
  passportCountry: {
    type: String,
  },
  passportExpiry: {
    type: String,
  },
  country: {
    type: String,
  },
  streetAddress: {
    type: String,
  },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
  whoseAddress: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  mobile1: {
    type: String,
    required: [true, "Please Enter Mobile Number"],
  },
  mobile2: {
    type: String,
  },
  departureDate: {
    type: String,
    required: true,
  },
  returnDate: {
    type: String,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  transportationDate: {
    type: String,
    required: true,
  },
  beddingType: {
    type: String,
    required: true,
  },
  departureAirport: {
    type: String,
    required: true,
  },
  activeVeteren: {
    type: String,
    required: true,
  },
  travelProtection: {
    type: String,
    required: true,
  },
  yourAnniversery: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
  },
  additonalPayment: {
    type: String,
  },
  payment2: {
    type: String,
  },
  specialRequest: {
    type: String,
  },
  questions: {
    type: String,
  },
  currentDate: {
    type: String,
  },
  singature: {
    type: String,
  },
  hostedEventAccess: {
    type: [mongoose.Types.ObjectId],
    required: true,
  },
});

module.exports = mongoose.model("ReservedGuest", reservedGuestSchema);
