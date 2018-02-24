const server = require('../../../src/server');

describe('checking for api endpoint /books', () => {
  it('checking for the status code', () => {
    const options = {
      method: 'GET',
      url: '/books',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
    });
  });
});
