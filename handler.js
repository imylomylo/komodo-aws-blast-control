'use strict';

module.exports.activation= (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      start: 1,
    }),
  };

  callback(null, response);
};
