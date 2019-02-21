'use strict';
const lib_index = require('./lib/index')

const root = async (event, context) => {
  return {
    statusCode: 200,
    body: 'Hello! Visit /seraphon if you care!',
  };
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

const seraphon = async (event, context) => {
  return {
    statusCode: 200,
    body: lib_index.seraphon.generate(),
  };
};


module.exports = {
  root,
  seraphon,
}