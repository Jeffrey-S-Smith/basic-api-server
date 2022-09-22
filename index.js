'use strict';

const { start } = require('./src/server.js');
const { db } = require('./src/models');
const PORT = process.env.PORT || 3001;

db.sync()
  .then(() => {
    start(PORT);
  })
  .catch(error => {
    console.error(error);
  });