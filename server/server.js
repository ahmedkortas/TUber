// import * as express from 'express';
// import { users } from './users';
// import { drivers } from './drivers';
const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const users = require("./users");
const drivers = require("./drivers");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Acces-Control-Allow-Origin", "*");
  res.header(
    "Access-ControlAllow-Headers",
    "Origin, X-Requested-With, Content-Type, Accespt"
  );
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, Delete");
  if ("OPTIONS" === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use("/users", users);
app.use("/drivers", drivers);

app.listen(4201, "127.0.0.1", function () {
  console.log("server is now listening");
});
