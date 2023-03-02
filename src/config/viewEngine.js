const express = require("express");
const path = require("path");
const configViewEngine = (app) => {
  // view engine setup
  console.log(__dirname);
  app.set("views", path.join("./src/views"));
  app.set("view engine", "ejs");
  app.use(express.static(path.join("public")));
};

module.exports = configViewEngine;
