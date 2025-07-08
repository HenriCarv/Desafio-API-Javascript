const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const apiPage = require('../page_objects/EndPoints');

When('I request a delete with a id of user', async function () {
  this.response = await apiPage.deleteUserById(this.createdUser._id);

  if (this.attach) {
    this.attach(`Request URL: ${apiPage.baseUrl}/usuarios/${this.createdUser._id}`, 'text/plain');
    this.attach(`Request Method: DELETE`, 'text/plain');
  }
});

When('I request a delete with a id of user on-existent', async function () {
  this.response = await apiPage.deleteUserById("Q0hurZQHmHxVlXJT");

  if (this.attach) {
    this.attach(`Request URL: ${apiPage.baseUrl}/usuarios/${"Q0hurZQHmHxVlXJT"}`, 'text/plain');
    this.attach(`Request Method: DELETE`, 'text/plain');
  }
});