const {
  gql
} = require('apollo-server');
const importSchema = require('graphql-import');

const typeDefs = importSchema('schema.graphql')
module.exports = typeDefs;