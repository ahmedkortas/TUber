//import * as express from 'express';
const express = require('express');
const db = require('../database/index.js');
const router = express.Router();

router.get('/', (req, res) => {
  db.getAllDrivers((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});
// export { router as users };
module.exports = router;
