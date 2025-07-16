const pactum = require('pactum');

class EndPoints {
  constructor() {
    this.baseUrl = 'https://serverest.dev';

    // Definição das rotas como constantes
    this.ROUTES = {
      LOGIN: '/login',
      USERS: '/usuarios',
      USER_BY_ID: (id) => `/usuarios/${id}`
    };

    this.token = null;
  }

  async login(email, password) {
    try {
      const response = await pactum.spec()
        .post(`${this.baseUrl}${this.ROUTES.LOGIN}`)
        .withJson({ email, password })
        .toss();

      if (!response || !response.body || !response.body.authorization) {
        throw new Error('Login failed. Invalid credentials or no authorization token received.');
      }

      this.token = response.body.authorization;
      return this.token;

    } catch (error) {
      return {
        statusCode: error.statusCode || 401,
        body: error.body || { error: error.message },
        headers: error.headers || {}
      };
    }
  }

  async createUser(userData) {
    try {
      const response = await pactum.spec()
        .post(`${this.baseUrl}${this.ROUTES.USERS}`)
        .withJson(userData)
        .toss();

      return {
        statusCode: response.statusCode,
        body: response.body,
        headers: response.headers
      };
    } catch (error) {
      return {
        statusCode: error.statusCode || 500,
        body: error.body || { error: error.message },
        headers: error.headers || {}
      };
    }
  }

  async getAllUsers() {
    const response = await pactum.spec()
      .get(`${this.baseUrl}${this.ROUTES.USERS}`)
      .withHeaders('Authorization', `Bearer ${this.token}`)
      .toss();

    return {
      statusCode: response.statusCode,
      body: response.body,
      headers: response.headers
    };
  }

  async getUserById(id) {
    try {
      const response = await pactum.spec()
        .get(`${this.baseUrl}${this.ROUTES.USER_BY_ID(id)}`)
        .withHeaders({ 'Authorization': `Bearer ${this.token}` })
        .toss();

      return {
        statusCode: response.statusCode,
        body: response.body,
        headers: response.headers
      };
    } catch (error) {
      return {
        statusCode: error.statusCode || 500,
        body: error.body || { error: error.message },
        headers: error.headers || {}
      };
    }
  }

  async putChangeUserById(id, userData) {
    try {
      const response = await pactum.spec()
        .put(`${this.baseUrl}${this.ROUTES.USER_BY_ID(id)}`)
        .withHeaders({ 'Authorization': `Bearer ${this.token}` })
        .withJson(userData)
        .toss();

      return {
        statusCode: response.statusCode,
        body: response.body,
        headers: response.headers
      };
    } catch (error) {
      return {
        statusCode: error.statusCode || 500,
        body: error.body || { error: error.message },
        headers: error.headers || {}
      };
    }
  }

  async deleteUserById(id) {
    const response = await pactum.spec()
      .delete(`${this.baseUrl}${this.ROUTES.USER_BY_ID(id)}`)
      .withHeaders('Authorization', `Bearer ${this.token}`)
      .toss();

    return {
      statusCode: response.statusCode,
      body: response.body,
      headers: response.headers
    };
  }
}

module.exports = new EndPoints();
