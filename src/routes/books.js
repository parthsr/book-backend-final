const getBooksWithRating = require('../helpers/getBooksWithRating');

const groupBy = (bookArray) => {
  const bookArrayWithRating = bookArray.reduce((accumulator, book) => {
    const tempAcc = accumulator;
    (tempAcc[book.Author] = accumulator[book.Author] || []).push(book);
    return tempAcc;
  }, {});
  return bookArrayWithRating;
};
module.exports = [{
  path: '/books',
  method: 'GET',
  handler: (request, reply) => {
    const toReply = getBooksWithRating();
    toReply.then((response) => {
      const bookArrayWithRating = groupBy(response);
      reply(bookArrayWithRating);
    });
  },
}];
