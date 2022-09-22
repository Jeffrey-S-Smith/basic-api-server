'use strict';

const express = require('express');
const foodRouter = require('./routes/food');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

const app = express();

app.use(logger);
app.use(express.json());
app.use('/food', validator, foodRouter);

// my error messages
const notFound = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');

// server routes
app.get('/', (request, response) => {
  response.status(200).send('Welcome to my server');
});


// food CRUD methods
// app.get('/food', foodRouter.getFoodItems);
// app.get('/food/:id', foodRouter.getFoodItem);
// app.post('/food', validator, foodRouter.createFoodItem);
// app.put('/food/:id', foodRouter.updateFoodItem);
// app.delete('/food/:id', foodRouter.deleteFoodItem);

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