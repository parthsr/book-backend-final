const server = require('../../../src/server');
const Models = require('../../../models');

describe('checking for api endpoint /like for creating first time', () => {
  afterEach((done) => {
    Models.likestable.destroy({ truncate: true }).then(() => {
      console.log('database destroyed');
      done();
    }).catch(console.log);
  });
  it('checking for the status code when creating for like', (done) => {
    const options = {
      method: 'POST',
      url: '/opinion/1/like',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(201);
      done();
    });
  });
  it('checking for the body when creating for like', (done) => {
    const options = {
      method: 'POST',
      url: '/opinion/1/like',
    };
    server.inject(options, (response) => {
      expect(response.payload).toBe('Created!');
      done();
    });
  });

  it('checking for the status code for dislike', (done) => {
    const options = {
      method: 'POST',
      url: '/opinion/1/dislike',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(201);
      done();
    });
  });
  it('checking for the body for dislike', (done) => {
    const options = {
      method: 'POST',
      url: '/opinion/1/dislike',
    };
    server.inject(options, (response) => {
      expect(response.payload).toBe('Created!');
      done();
    });
  });
});

describe('checking for api endpoint /like for creating again and again', () => {
  afterAll((done) => {
    Models.likestable.destroy({ truncate: true }).then(() => {
      console.log('database destroyed');
      done();
    }).catch(console.log);
  });
  it('checking for the status code when creating for like', (done) => {
    const options = {
      method: 'POST',
      url: '/opinion/1/like',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(201);
      done();
    });
  });
  it('checking for the body when creating for like', (done) => {
    const options = {
      method: 'POST',
      url: '/opinion/1/like',
    };
    server.inject(options, (response) => {
      expect(response.payload).toBe('Updated!');
      done();
    });
  });

  it('checking for the status code for dislike', (done) => {
    const options = {
      method: 'POST',
      url: '/opinion/1/dislike',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  it('checking for the body for dislike', (done) => {
    const options = {
      method: 'POST',
      url: '/opinion/1/dislike',
    };
    server.inject(options, (response) => {
      expect(response.payload).toBe('Updated!');
      done();
    });
  });
});

describe('checking if the inserting really happens or not', () => {
  afterAll((done) => {
    Models.likestable.destroy({ truncate: true }).then(() => {
      console.log('database destroyed');
      done();
    }).catch(console.log);
  });
  beforeAll((done) => {
    Models.likestable.destroy({ truncate: true }).then(() => {
      console.log('database destroyed');
      done();
    }).catch(console.log);
  });
  it('checking if inserted', (done) => {
    const options = {
      method: 'POST',
      url: '/opinion/1/like',
    };
    server.inject(options, () => {
      Models.likestable.findAll().then((records) => {
        expect(records.length).toBe(1);
        done();
      });
    });
  });
});

