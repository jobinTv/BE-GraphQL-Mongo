const { gql } = require('apollo-server-express'); 


const typeDefs = gql `
 type User {
      id: ID,
      name: String,
      username: String,
      email: String,
 }
 type Query {
   getAllUsers: [User!]!
 }
 type Mutation {
   createUser(name: String, username: String, email: String): User
 }
  `

module.exports = { typeDefs };