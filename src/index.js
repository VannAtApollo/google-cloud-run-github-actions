
require(`dotenv`).config();

const trackAPI = require('./datasources/track');
const artistAPI = require('./datasources/artist');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers/resolvers');
const { lstat } = require('fs');
require('../.env');


console.log(`
${process.env.HOST}
${process.env.PORT}
${process.env.APOLLO_KEY} `);


console.log(`host is ${HOST}`)


const dataSources = () => ({
    trackAPI: new trackAPI(),
    artistAPI: new artistAPI(),
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    introspection: true,
    apollo: {
      key: process.env.POLLO_KEY,
    url: process.env.HOST,
    port: process.env.PORT
    },
  });

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test



const { url, port } = server.listen({ port: PORT || 4300 });
console.log(`
    🚀  Server is running
    🔉  Listening on port ${PORT}
    📭  Query at ${process.env.HOST}:${PORT}
    **  We are using the apikey ${process.env.APIKEY}
  `);


module.exports = {
    dataSources,
    typeDefs,
    resolvers,
    ApolloServer,
    trackAPI,
    artistAPI, 
    server,
  };

