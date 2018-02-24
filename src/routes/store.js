const storeFunc = require('../helpers/storeFunc');

module.exports = [{
  path: '/store',
  method: 'POST',
  handler: (request, reply) => {
    const storePromise = storeFunc();
    storePromise.then((successMessage) => {
      reply(successMessage).code(200);
    }).catch(() => {
      reply('database transaction failed').code(500);
    });
  },
}];

