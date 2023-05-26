const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ReservedGuest = require("../models/reservedGuestsModel");

exports.addReservedGuest = catchAsyncErrors(async (req, res) => {
  try {
    const hostedEventAccess = req.params.id;
    const {
      knwoAbout,
      totalPassengers,
      passengerTitle,
      firstName,
      middleName,
      lastName,
      suffix,
      passengersDob,
      gender,
      passportNum,
      passportCountry,
      passportExpiry,
      country,
      streetAddress,
      city,
      province,
      zipCode,
      whoseAddress,
      email,
      mobile1,
      mobile2,
      departureDate,
      returnDate,
      roomType,
      transportationDate,
      beddingType,
      departureAirport,
      activeVeteren,
      travelProtection,
      yourAnniversery,
      paymentType,
      additonalPayment,
      payment2,
      specialRequest,
      questions,
      currentDate,
      singature,
    } = req.body;

    const reservedGuest = await ReservedGuest.create({
      knwoAbout,
      totalPassengers,
      passengerTitle,
      firstName,
      middleName,
      lastName,
      suffix,
      passengersDob,
      gender,
      passportNum,
      passportCountry,
      passportExpiry,
      country,
      streetAddress,
      city,
      province,
      zipCode,
      whoseAddress,
      email,
      mobile1,
      mobile2,
      departureDate,
      returnDate,
      roomType,
      transportationDate,
      beddingType,
      departureAirport,
      activeVeteren,
      travelProtection,
      yourAnniversery,
      paymentType,
      additonalPayment,
      payment2,
      specialRequest,
      questions,
      currentDate,
      singature,
      hostedEventAccess,
    });
    res.status(201).json({
      reservedGuest,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Something went wrong!",
    });
  }
});
