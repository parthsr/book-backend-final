const server = require('../../../src/server');
const Models = require('../../../models');

describe('checking if the server works or not', () => {
  afterAll((done) => {
    Models.booksdb.destroy({ truncate: true }).then(() => {
      console.log('deleted wohoo');
      done();
    }).catch(console.log);
  });
  test('checking if the status code is 200 or not', (done) => {
    const options = {
      url: '/store',
      method: 'POST',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('checking if the database is updated or not', (done) => {
    const options = {
      url: '/store',
      method: 'POST',
    };
    server.inject(options, (response) => {
      expect(response.result).toBe('database updated');
      done();
    });
  });
  test('checking if the database is updated or not with findall', (done) => {
    const options = {
      url: '/store',
      method: 'POST',
    };
    server.inject(options, () => {
      Models.booksdb.findAll().then((records) => {
        expect(records.length).toBe(12);
        done();
      });
    });
  });
});
