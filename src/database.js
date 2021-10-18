const mongoose = require("mongoose");
require("dotenv").config();

const { DATABASE_HOST, DATABASE_PORT, DATABASE_NAME } = process.env;
const URI = `mongodb://${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("database is connected"))
  .catch((err) => console.log(err));
