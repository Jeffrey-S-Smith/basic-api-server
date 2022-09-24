'use strict';
const { Food } = require('../models');
const express = require('express');
const { request } = require('express');
const router = express.Router();

router.get('/food',readFood);
router.get('/food/:id',readFood);
router.post('/food',createFood);
router.put('/food/:id',(request, response, next)=>{
  response.send('working on it');
});

router.delete('/food/:id',(request, response, next)=>{
  response.send('working on it');
});



async function readFood
(request, response, next) {
  let foodRecords = await Food.read();
  response.status(200);
  response.send(foodRecords);
}

async function readOneFood
(request, response, next) {
  let foodRecord = await Food.read(request.params.id);
  response.status(200);
  response.send(foodRecord);
}

async function createFood
(request, response, next) {
  let foodRecord = await Food.create(request.body);
  response.status(200);
  response.send(foodRecord);
}

module.exports = router;