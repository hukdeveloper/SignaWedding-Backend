const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Guest = require("../models/guestsModel");
const ErrorHander = require("../utils/errorhandler");

exports.addGuests = catchAsyncErrors(async (req, res) => {
  const { name, email, hostedEventAccess } = req.body;
  if (!name || !hostedEventAccess || !email) {
    return next(new ErrorHander("Please Enter All Required Fields", 400));
  }
  const guest = await Guest.create({
    name,
    email,
    hostedEventAccess,
  });

  res.status(201).json(guest);
});
