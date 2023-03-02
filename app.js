const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const configViewEngine = require("./src/config/viewEngine");
const webRoutes = require("./src/routes/web");
const connection = require("./src/config/database");

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// config template engine
configViewEngine(app);
// Khai báo route
app.use("/", webRoutes);

const PORT = process.env.PORT || 8686;
// self running function
(async () => {
  try {
    await connection();
    app.listen(PORT, () => {
      console.log(`App is running: http://localhost:${PORT}/`);
    });
  } catch (err) {
    console.log(">>> Error connection: ", err);
  }
})();
module.exports = app;
