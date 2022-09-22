'use strict';

const { FoodModel } = require('./../models');
const express = require('express');
// const router = express.Router();

// router.get('/food', (res, req, next) => {
//   res.send
// });
// router.get('/food/:id, ');
// router.post('/food');
// router.put(/food/:id',);
// router.delete(/food/:id');

const foodrouter = {
  

  getFoodItems: (request, response) => {
    FoodModel.findAll()
      .then(foodRecords => response.status(200).send(foodRecords))
      .catch(error => console.log(error));
  },

  getFoodItem: (request, response) => {
    FoodModel.findOne({ where: { id: request.params.id } })
      .then(foodRecord => response.status(200).send(foodRecord))
      .catch(error => console.log(error));
  },

  createFoodItem: (request, response) => {
    FoodModel.create(request.body)
      .then(foodRecord => response.status(200).send(foodRecord))
      .catch(error => console.log(error));
  },

  updateFoodItem: (request, response) => {
    FoodModel.update(request.body, { where: { id: request.params.id } })
      .then(foodRecord => response.status(200).send(foodRecord))
      .catch(error => console.log(error));
  },

  deleteFoodItem: async (request, response) => {
    await FoodModel.destroy({ where: { id: request.params.id } });
    response.status(200).send(`Successfully deleted id ${request.params.id}`);
  },
};

module.exports = foodrouter;

//collection 

//