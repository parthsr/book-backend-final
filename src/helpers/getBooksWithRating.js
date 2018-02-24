const rp = require('request-promise');

const getBooksWithRating = () => rp(' https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks').then((allBooks) => {
  const bookArray = JSON.parse(allBooks).books;
  const requestRatings = bookArray.map(book => (rp(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${book.id}`)));
  return Promise.all(requestRatings).then((rating) => {
    for (let i = 0; i < bookArray.length; i += 1) {
      bookArray[i].rating = JSON.parse(rating[i]).rating;
    }
    return bookArray;
  });
});

module.exports = getBooksWithRating;
