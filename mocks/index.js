const {
  MockList
} = require('apollo-server');

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => 'Hello',
};

module.exports = mocks;