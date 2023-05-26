const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("./userModel");

exports.addHostedEventsToUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { eventAccess: req.body.eventAccess } },
      {
        new: true,
        runValidators: true,
      }
    );
    console.log(user);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
});

exports.removeHostedEventFromUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const userId = req.params.id;
    const eventIdToRemove = req.body.eventAccess; // The specific event ID to remove

    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { eventAccess: eventIdToRemove } },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
