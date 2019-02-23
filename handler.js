'use strict';
const lib_index = require('./lib/index')
const root = require('./root')

const seraphon = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: lib_index.seraphon.generate(),
  };
};


module.exports = {
  root,
  seraphon,
}