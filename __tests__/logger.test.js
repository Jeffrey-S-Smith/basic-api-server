'use strict';
const server = require('./../src/server');
const supertest = require('supertest');

const request = supertest(server.app);

describe('Testing logger', () => {
  test('Should console log something', async () => {
    jest.spyOn(console, 'log');
    const response = await request.get('/food');
    expect(response.status).toEqual(200);
    expect(console.log).toHaveBeenCalledWith('GET /food');
  });
});