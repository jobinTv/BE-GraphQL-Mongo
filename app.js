require('dotenv').config({
  path: `${__dirname}/.env.local`
})
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const PORT = 8008;
const {resolvers} = require('./resolvers/index');
const mongo = require('./config/mongo');
const { typeDefs } = require('./typeDefs/index');

(async () => {
  try{
    await mongo.connect();
  }
  catch(e){
    console.log(e, 'error');
  }
  console.log('Mongodb connection completed');
})()

const startApolloServer = async ( typeDefs, resolvers) => {
  
  const server = new ApolloServer({typeDefs, resolvers})
  const app = express();

  await server.start();
  server.applyMiddleware({app, path: '/graphql'});
  
  app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
  });

}

startApolloServer(typeDefs, resolvers);



