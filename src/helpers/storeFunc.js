const Models = require('../../models');
const getBooksWithRating = require('../helpers/getBooksWithRating');

const storeFunc = () => getBooksWithRating().then((bookArray) => {
  console.log(typeof bookArray[0].Author);
  const newBookArray = bookArray.map((book) => {
    const newBook = {
      author: book.Author,
      bookid: book.id,
      name: book.Name,
      rating: book.rating,
    };
    Models.likestable.create({
      id: book.id,
      bookid: book.id,
      likestatus: 'dislike',
    });
    return newBook;
  });
  Models.booksdb.destroy({ truncate: true });
  return Models.booksdb.bulkCreate(newBookArray).then(()=>{
    console.log('database made');
  });
});

module.exports = storeFunc;

