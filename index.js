const Koa = require('koa');
const {
  ApolloServer
} = require('apollo-server-koa');
const typeDef = require('./schema');
const resolvers = require('./resolvers');
const mocks = require('./mocks');


const context = {};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  mocks: mocks //true
});

const app = new Koa();
server.applyMiddleware({
  app,
  path: "/graphql"
});

const port = 3001;
const host = "localhost";

app.listen(port, host, () => {
  console.log(`🚀 Server ready at http://${host}:${port}${server.graphqlPath}`);
});