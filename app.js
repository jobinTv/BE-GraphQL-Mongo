const express = require('express');
const app = express();
const PORT = 8008;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas');

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});