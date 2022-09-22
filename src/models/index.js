'use strict';
const foodSchema = require('./food.js');

const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';


const FoodModel = foodSchema(sequelize, DataTypes);

let herokuOptions = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

let sequelize = new Sequelize(DATABASE_URL, process.env === 'production' ? herokuOptions : {});


module.exports = {
  db: sequelize,
  FoodModel,
};
