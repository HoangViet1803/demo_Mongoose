const mongoose = require("mongoose");
require("dotenv").config();
const dbState = [
  {
    value: 0,
    label: "disconnected",
  },
  {
    value: 1,
    label: "connected",
  },
  {
    value: 2,
    label: "connecting",
  },
  {
    value: 3,
    label: "disconnecting",
  },
];
const connection = async () => {
  const options = {
    dbName: process.env.DB_NAME,
  };
  await mongoose.connect(process.env.DB_HOST, options);
  const state = Number(mongoose.connection.readyState);
  console.log(dbState.find((f) => f.value === state).label, "to database");
};
module.exports = connection;
