const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Guests = require("../models/guestsModel");
const HostedEvent = require("../models/hostedEventsModel");
const ReservedGuests = require("../models/reservedGuestsModel");
const User = require("../models/userModel");
const ErrorHander = require("../utils/errorhandler");

exports.addHostedEvents = catchAsyncErrors(async (req, res, next) => {
  const {
    title,
    passcode,
    hostName,
    propertyName,
    address,
    eventDesc,
    depositeDeadline,
    secondDue,
    cancelationDate,
    reductionDate,
    finalPaymentDate,
    resortPic,
    resortName,
    groupTravelDate,
    resortDetails,
    resortAmenities,
    travelRestrictions,
    travelRestrictionsHighlights,
    destinationGuide,
  } = req.body;

  if (!title || !passcode) {
    return next(new ErrorHander("Please Enter All Required Fields", 400));
  }
  const hostedEvent = await HostedEvent.create({
    title,
    passcode,
    hostName,
    propertyName,
    address,
    eventDesc,
    depositeDeadline,
    secondDue,
    cancelationDate,
    reductionDate,
    finalPaymentDate,
    resortPic,
    resortName,
    groupTravelDate,
    resortDetails,
    resortAmenities,
    travelRestrictions,
    travelRestrictionsHighlights,
    destinationGuide,
  });
  res.status(201).json({
    success: true,
    hostedEvent,
  });
});

exports.updateHostedEvent = catchAsyncErrors(async (req, res) => {
  try {
    const hostedEventUpdate = await ({
      title = req.body.title,
      passcode = req.body.passcode,
      hostName = req.body.hostName,
      propertyName = req.body.propertyName,
      address = req.body.address,
      eventDesc = req.body.eventDesc,
      depositeDeadline = req.body.depositeDeadline,
      secondDue = req.body.secondDue,
      cancelationDate = req.body.cancelationDate,
      reductionDate = req.body.reductionDate,
      finalPaymentDate = req.body.finalPaymentDate,
      resortPic = req.body.resortPic,
      resortName = req.body.resortName,
      groupTravelDate = req.body.groupTravelDate,
      resortDetails = req.body.resortDetails,
      resortAmenities = req.body.resortAmenities,
      travelRestrictions = req.body.travelRestrictions,
      travelRestrictionsHighlights = req.body.travelRestrictionsHighlights,
      destinationGuide = req.body.destinationGuide,
    } = req.body);
    const hostedEvent = await HostedEvent.findByIdAndUpdate(
      req.params.id,
      hostedEventUpdate,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    res.status(200).json({
      success: true,
      hostedEvent,
    });
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong!",
    });
  }
});

exports.removeHostedEvent = catchAsyncErrors(async (req, res) => {
  try {
    const hostedEvent = await HostedEvent.findByIdAndRemove(req.params.id);
    res.status(200).json({
      success: true,
      hostedEvent,
    });
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong!",
    });
  }
});

exports.getHostedEvents = catchAsyncErrors(async (req, res, next) => {
  const hostedEvents = await HostedEvent.find();
  res.status(200).json({
    success: true,
    hostedEvents,
  });
});

// 64678c1b6498d3902b58efbf

exports.getHostedEventSingleUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const userId = await req.params.id;

    const user = await User.findOne({ _id: userId }).populate("eventAccess");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const eventIds = user.eventAccess; // Assuming eventAccess is an array of event IDs

    const events = await HostedEvent.find({ _id: { $in: eventIds } });

    if (!events || events.length === 0) {
      return res.status(404).json({ message: "Events not found" });
    }

    return res.status(200).json({ events });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

exports.getAllEventGuest = catchAsyncErrors(async (req, res) => {
  try {
    const eventId = req.params.id;
    // const eventId = "646796c02e7c8f6f5d495562";
    const guests = await Guests.find({
      hostedEventAccess: eventId,
    });
    return res.status(200).json({ guests });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
exports.removeEventGuest = catchAsyncErrors(async (req, res) => {
  try {
    const guestId = req.params.id;
    // const guestIdToRemove = req.body.eventId; // The specific event ID to remove

    const guest = await Guests.findByIdAndDelete(guestId);

    if (!guest) {
      return res
        .status(404)
        .json({ success: false, message: "Guest not found" });
    }

    res.status(200).json({ success: true, guest });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
exports.addGuestsToEvent = catchAsyncErrors(async (req, res) => {
  try {
    const event = await HostedEvent.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { guests: req.body.guests } },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      success: true,
      event,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

exports.addReservedGuest = catchAsyncErrors(async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const hostedEventAccess = req.params.id;
    const reservedGuest = await ReservedGuests.create({
      firstName,
      lastName,
      hostedEventAccess,
    });
    res.status(201).json({
      success: true,
      reservedGuest,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

exports.getHostedEventsReservedGuests = catchAsyncErrors(async (req, res) => {
  try {
    const eventId = req.params.id;
    // const eventId = "646796c02e7c8f6f5d495562";
    const reservedGuests = await ReservedGuests.find({
      hostedEventAccess: eventId,
    });
    return res.status(200).json({ reservedGuests });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
