const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor({ attach }) {
    this.attach = attach;
    this.response = null;
  }
}

setWorldConstructor(CustomWorld);