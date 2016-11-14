'use strict';

module.exports = [
  {
    path: '/',
    method: 'GET',
    handler: (request, reply) => {
      reply({
        statusCode: 200,
        message: 'In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.'
      });
    }
  }
];