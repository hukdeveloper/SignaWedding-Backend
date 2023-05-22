const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");

// const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "server/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());

// Route Imports
// const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const hostedEvents = require("./routes/hostedEvents");
const admin = require("./routes/adminRoute");
const guest = require("./routes/guestsRoute");

// app.use("/api/v1", product);
app.use("/api", user);
app.use("/api", hostedEvents);
app.use("/api", admin);
app.use("/api", guest);

// app.use(express.static(path.join(__dirname, "../client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
// });

// Middleware for Errors
// app.use(errorMiddleware);

module.exports = app;
