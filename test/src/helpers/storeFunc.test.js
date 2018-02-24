const Models = require('../../../models');

describe('checking if the database is properly working or not', () => {
  afterAll((done) => {
    Models.booksdb.destroy({
      truncate: true,
    }).then(() => {
      done();
    }).catch(console.log);
  });
  it('checking if the inserting of data works or not', (done) => {
    Models.booksdb.create({
      author: 'Parth',
      bookid: 5,
      name: 'parthBook',
      rating: 4.4,
    }).then(() => 'true').then((value) => {
      console.log(value);
      done();
    });
  });
});
