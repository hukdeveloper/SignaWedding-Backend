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
  hostName: {
    type: String,
    required: [true, "Please Enter the Host Name"],
  },
  propertyName: {
    type: String,
    required: [true, "Please Enter the Property Name"],
  },
  depositeDeadline: {
    type: String,
    required: [true, "Please Enter the event date"],
  },
  address: {
    type: String,
    required: [true, "Please Enter the Location/Address"],
  },
  eventDesc: {
    type: String,
    required: [true, "Please Enter the Event Description"],
  },
  depositeDeadline: {
    type: String,
    required: [true, "Please Enter the Group deposite deadline date"],
  },
  secondDue: {
    type: String,
    required: [true, "Please Enter the 2nd deposite due"],
  },
  cancelationDate: {
    type: String,
    required: [true, "Please Enter the cancelation date"],
  },
  reductionDate: {
    type: String,
    required: [true, "Please Enter the reduction date"],
  },
  finalPaymentDate: {
    type: String,
    required: [true, "Please Enter the final payment date"],
  },
  // Manage Event Side
  resortPic: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2023/04/24/03/16/camping-7947056_1280.jpg",
  },
  resortName: {
    type: String,
    required: [true, "Must enter resort name"],
  },
  groupTravelDate: {
    type: String,
    required: [true, "Please Enter the travel date"],
  },
  resortDetails: {
    type: String,
    required: [true, "Must enter resort details"],
  },
  resortAmenities: {
    type: String,
    required: [true, "Must enter resort amenities"],
  },
  travelRestrictions: {
    type: String,
    required: [true, "Add some travel restrictions"],
  },
  travelRestrictionsHighlights: {
    type: String,
    required: [true, "Add some travel restrictions highlights"],
  },
  destinationGuide: {
    type: String,
    required: [true, "Add some travel guides"],
  },
});

module.exports = mongoose.model("HostedEvents", hostedEventsSchema);
