const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const apiPage = require('../page_objects/EndPoints');

Given('I am authenticated with the new user credentials', async function () {
  if (!this.createdUser) {
    throw new Error('No user has been created. Make sure the Background step is running.');
  }
  await apiPage.login(this.createdUser.email, this.createdUser.password);
});

Given('I try authenticated with user non-existent', async function () {
  const result = await apiPage.login("blabla@blabla.com", "xpto");
  this.response = result;

  if (result.statusCode && result.statusCode !== 200 && this.attach) {
    this.attach(`Login failed: ${JSON.stringify(result.body, null, 2)}`, 'application/json');
  }
});


When('I request all users', async function () {
  this.response = await apiPage.getAllUsers();
  
  if (this.attach) {
    this.attach(`Request URL: ${apiPage.baseUrl}/usuarios`, 'text/plain');
    this.attach(`Request Method: GET`, 'text/plain');
  }
});

Then('the response should contain a list of users', function () {
  expect(this.response.body).to.have.property('usuarios');
  expect(this.response.body.usuarios).to.be.an('array');
  
  if (this.attach) {
    this.attach(`Response Body: ${JSON.stringify(this.response.body, null, 2)}`, 'application/json');
  }
});