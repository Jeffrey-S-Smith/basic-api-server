'use strict';
const app = require('./../src/server');
const supertest = require('supertest');

const request = supertest(app);

describe('Testing if request query validator works', () => {
  test('Should respond with 200 if no name in search query', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(200);
  });
});