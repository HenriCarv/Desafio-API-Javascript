const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { faker } = require('@faker-js/faker');
const apiPage = require('../page_objects/EndPoints');

When('i change a user', async function () {
  const changedUserData = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: "true"
  };

  this.response = await apiPage.putChangeUserById(this.createdUser._id, changedUserData);

  if (this.attach) {
    this.attach(`Request URL: ${apiPage.baseUrl}/usuarios/${this.createdUser._id}`, 'text/plain');
    this.attach(`Request Method: PUT`, 'text/plain');
    this.attach(`Request Body: ${JSON.stringify(changedUserData, null, 2)}`, 'application/json');
    this.attach(`Response: ${JSON.stringify(this.response, null, 2)}`, 'application/json');
  }
});

When('i change a user non-existent', async function () {
  const nonExistentId = 'Q0hurZQHmHxVlXJT';
  const changedUserData = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: "true"
  };

  this.response = await apiPage.putChangeUserById(nonExistentId, changedUserData);

  if (this.attach) {
    this.attach(`Request URL: ${apiPage.baseUrl}/usuarios/${nonExistentId}`, 'text/plain');
    this.attach(`Request Method: PUT`, 'text/plain');
    this.attach(`Request Body: ${JSON.stringify(changedUserData, null, 2)}`, 'application/json');
    this.attach(`Response: ${JSON.stringify(this.response, null, 2)}`, 'application/json');
  }
});

Then('the response should contain a user with changes', function () {
  expect(this.response.body).to.have.property('message').that.includes('sucesso');
  
  if (this.attach) {
    this.attach(`Response Body: ${JSON.stringify(this.response.body, null, 2)}`, 'application/json');
  }
});

Then('I verify the user by getting the user with ID', async function () {
  const verificationResponse = await apiPage.getUserById(this.createdUser._id);

  expect(verificationResponse.statusCode).to.equal(200);
  expect(verificationResponse.body).to.have.property('nome');
  expect(verificationResponse.body).to.have.property('email');
  expect(verificationResponse.body).to.have.property('_id');
  
  if (this.attach) {
    this.attach(`Verification Response Body: ${JSON.stringify(verificationResponse.body, null, 2)}`, 'application/json');
  }
});