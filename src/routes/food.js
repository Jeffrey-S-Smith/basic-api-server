'use strict';

const express = require('express');
const { FoodModel } = require('../models');

const router = express.Router();

router.get(`/`, (req,res)=>{
  res.send('hello');
});

router.post('/food', async (req, res, next) => {
  let food = req.body;
  let response = await FoodModel.create(food);
  res.status(200).send(response);
});

router.get('/food', async (req, res, next) => {
  let allFoods = await FoodModel.readAll();
  res.status(200).send(allFoods);
});

router.get('/food/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneFood = await FoodModel.readAll();
  res.status(200).send(oneFood);
});

router.put('/food/:id', async (req, res, next) => {
  let { id } = req.params;
  await FoodModel.update(req.body, {where: { id }});
  let updatedFood = await FoodModel.findOne({where: { id }});
  res.status(200).send(updatedFood);
});

router.delete('/food/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedFood = await FoodModel.delete(id);
  res.status(200).send(deletedFood);
});

module.exports = router;