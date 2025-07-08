const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { faker } = require('@faker-js/faker');
const apiPage = require('../page_objects/EndPoints');

Given('I create new user Administrator', async function () {
  this.createdUser = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: "true"
  };

  this.response = await apiPage.createUser(this.createdUser);

  this.createdUser._id = this.response.body._id;
  
  if (this.attach) {
    this.attach(`Created User: ${JSON.stringify(this.createdUser, null, 2)}`, 'application/json');
    this.attach(`Create User Response: ${JSON.stringify(this.response, null, 2)}`, 'application/json');
  }
});

Given('I create new user', async function () {
  this.createdUser = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: "false"
  };

  this.response = await apiPage.createUser(this.createdUser);

  this.createdUser._id = this.response.body._id;
  
  if (this.attach) {
    this.attach(`Created User: ${JSON.stringify(this.createdUser, null, 2)}`, 'application/json');
    this.attach(`Create User Response: ${JSON.stringify(this.response, null, 2)}`, 'application/json');
  }
});

Given('I am trying to create a existing user', async function () {
  this.createdUser = {
    nome: "Fulano da Silva",
    email: "beltrano@qa.com.br",
    password: "teste",
    administrador: "true"
  };

  this.response = await apiPage.createUser(this.createdUser);

  this.createdUser._id = this.response.body._id;
  
  if (this.attach) {
    this.attach(`Created User: ${JSON.stringify(this.createdUser, null, 2)}`, 'application/json');
    this.attach(`Create User Response: ${JSON.stringify(this.response, null, 2)}`, 'application/json');
  }
});

Given('I create a new user with email {string}', async function (email) {
  this.createdUser = {
    nome: faker.person.fullName(),
    email: email,
    password: faker.internet.password(),
    administrador: "true"
  };

  this.response = await apiPage.createUser(this.createdUser);

  if (this.attach) {
    this.attach(`Created User: ${JSON.stringify(this.createdUser, null, 2)}`, 'application/json');
    this.attach(`Create User Response: ${JSON.stringify(this.response, null, 2)}`, 'application/json');
  }
});

When('I try to create another user with the same email {string}', async function (email) {
  const duplicateUser = {
    nome: faker.person.fullName(),
    email: email,
    password: faker.internet.password(),
    administrador: "true"
  };

  this.response = await apiPage.createUser(duplicateUser);

  if (this.attach) {
    this.attach(`Duplicate User Attempt: ${JSON.stringify(duplicateUser, null, 2)}`, 'application/json');
    this.attach(`Duplicate User Response: ${JSON.stringify(this.response, null, 2)}`, 'application/json');
  }
});

Given('I am trying to create a user with invalid informations', async function () {
  this.createdUser = {
    nome: "",
    email: "",
    password: "",
    administrador: ""
  };

  this.response = await apiPage.createUser(this.createdUser);
  
  if (this.attach) {
    this.attach(`Created User: ${JSON.stringify(this.createdUser, null, 2)}`, 'application/json');
    this.attach(`Create User Response: ${JSON.stringify(this.response, null, 2)}`, 'application/json');
  }
});

When('the response status code should be {int}', function (statusCode) {
  expect(this.response.statusCode).to.equal(statusCode);
  
  if (this.attach) {
    this.attach(`Response Status: ${this.response.statusCode}`, 'text/plain');
    this.attach(`Response Headers: ${JSON.stringify(this.response.headers, null, 2)}`, 'application/json');
  }
});

Then('the response should contain a success message', function () {
  expect(this.response.body).to.have.property('message');
  expect(this.response.body.message).to.include('sucesso');
  
  if (this.attach) {
    this.attach(`Response Body: ${JSON.stringify(this.response.body, null, 2)}`, 'application/json');
  }
});

Then('the response should contain a error message', function () {
  expect(this.response.body).to.be.an('object');
  
  if (this.response.body.message) {
    expect(this.response.body.message).to.be.a('string');
  } else if (this.response.body.error) {
    expect(this.response.body.error).to.be.a('string');
  } else {
    expect(Object.keys(this.response.body)).to.have.length.above(0);
  }
  
  if (this.attach) {
    this.attach(`Response Body: ${JSON.stringify(this.response.body, null, 2)}`, 'application/json');
  }
});