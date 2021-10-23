const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const { json, urlencoded } = require("body-parser");
const router = require("./routers/index.router");
const cors = require("cors");
require("./database");

// settings
app.set("port", process.env.PORT);

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);

// routers
app.use("/api", router);

// initialization
app.listen(app.get("port"), () => {
  console.log("listen on port " + app.get("port"));
});
