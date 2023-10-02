/*
  express.js
  Christopher James
  301252282
  2023-10-01
 */

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("../app/routes");
const aboutRouter = require("../app/routes/about");
const projectsRouter = require("../app/routes/projects");
const servicesRouter = require("../app/routes/services");
const contactRouter = require("../app/routes/contact");
const thankYouRouter = require("../app/routes/thank-you");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "../app/views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/projects", projectsRouter);
app.use("/services", servicesRouter);
app.use("/contact", contactRouter);
app.use("/thank-you", thankYouRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
