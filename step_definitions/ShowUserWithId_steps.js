const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const apiPage = require('../page_objects/EndPoints');

When('I request with a id of users', async function () {
  this.response = await apiPage.getUserById(this.createdUser._id);

  if (this.attach) {
    this.attach(`Request URL: ${apiPage.baseUrl}/usuarios/${this.createdUser._id}`, 'text/plain');
    this.attach(`Request Method: GET`, 'text/plain');
  }
});

Then('the response should contain a user', function () {
  expect(this.response.body).to.have.property('nome');
  expect(this.response.body).to.have.property('email');
  expect(this.response.body).to.have.property('_id');
  
  if (this.attach) {
    this.attach(`Response Body: ${JSON.stringify(this.response.body, null, 2)}`, 'application/json');
  }
});

When('I request a user with a non-existent ID', async function () {
  const nonExistentId = 'nonexistent123456789';
  this.response = await apiPage.getUserById(nonExistentId);

  if (this.attach) {
    this.attach(`Request URL: ${apiPage.baseUrl}/usuarios/${nonExistentId}`, 'text/plain');
    this.attach(`Request Method: GET`, 'text/plain');
  }
});