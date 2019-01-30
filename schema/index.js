const {
  gql
} = require('apollo-server');

const typeDefs = gql `
  type Query{
    hello:String,
    resolved:String
  }
`;

const resolvers = {
  Query: {
    resolved: () => 'Resolved'
  }
};

module.exports = {
  typeDefs,
  resolvers
};