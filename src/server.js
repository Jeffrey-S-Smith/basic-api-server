'use strict';

const express = require('express');
const foodRouter = require('./routes/food');
const app = express();

// my error messages
const notFound = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');

// server routes
app.get('/', (request, response) => {
  response.status(200).send('Welcome to my server');
});

app.use(express.json());
app.use(foodRouter);

// server error handling
app.get('*', notFound);
app.use(serverError);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('app is running!!');
    });
  },
  app,
};