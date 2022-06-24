const graphql = require('graphql');
const UserType = require('./typeDefs/UserType');
const { insertUser, getUsers } = require('../models/users');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList } = graphql;

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: {
          type: new GraphQLList(UserType),
          args: { id: {type: GraphQLInt}},
          resolve(parent, args) {
            return getUsers('users');
          }
        }
    }
});


const Mutation = new GraphQLObjectType({
  name:"Mutation",
  fields:{
    createUser: {
      type: UserType,
      args: {
        name:{type: GraphQLString},
        username:{type: GraphQLString},
        email:{type: GraphQLString},
      },
     resolve(parent, args) {
      return insertUser(args, 'users')
     }
   }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery ,mutation: Mutation});