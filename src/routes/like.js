const Models = require('../../models');

module.exports = [{
  method: 'POST',
  path: '/opinion/{bookid}/{likestatus}',
  handler: (request, reply) => {
    const bookid = Number(request.params.bookid);
    const { likestatus } = request.params;
    Models.likestable.upsert({
      id: bookid,
      bookid,
      likestatus,
    }).then((value) => {
      if (value === true) {
        reply('Created!').code(201);
      } else {
        reply('Updated!').code(200);
      }
    });
  },
}];

