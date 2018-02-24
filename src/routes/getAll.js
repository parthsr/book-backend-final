const Models = require('../../models');

const handler = (request, response) => {
  Models.booksdb.findAll().then((booksRecords) => {
    const newBookRecords = booksRecords.map(book => Models.likestable.findOne({
      where: {
        bookid: book.bookid,
      },
    }).then((likeRecord) => {
      const newBook = book;
      newBook.dataValues.likestatus = likeRecord.dataValues.likestatus;
      return newBook;
    }));
    Promise.all(newBookRecords).then((booksWithLikes) => {
      const bookArrayWithRating = booksWithLikes.reduce((accumulator, book) => {
        const tempAcc = accumulator;
        (tempAcc[book.author] = accumulator[book.author] || []).push(book);
        return tempAcc;
      }, {});
      response(bookArrayWithRating);
    });
  });
};

module.exports = [{
  path: '/allbooks',
  method: 'GET',
  handler,
}];
