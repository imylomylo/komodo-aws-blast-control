'use strict';

module.exports.activation= (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: "start:0"
    };

  callback(null, response);
};
