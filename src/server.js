'use strict';

const express = require('express');
const foodRouter = require('./routes/food');
const app = express();

app.use(express.json());
app.use(foodRouter);


module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('app is running!!');
    });
  },
  app,
};