require('dotenv').config({
  path: `${__dirname}/.env.local`
})
const express = require('express');
const app = express();
const PORT = 8008;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas');
const mongo = require('./config/mongo');

app.use(express.json());

(async () => {
  try{
    await mongo.connect();
  }
  catch(e){
    console.log(e, 'error');
  }
  console.log('Mongodb connection completed');
})()

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});