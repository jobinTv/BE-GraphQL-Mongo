const graphql = require('graphql');
const UserType = require('./typeDefs/UserType');

const userData =  require('../mockdata.json');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList } = graphql;

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: {
          type: new GraphQLList(UserType),
          args: { id: {type: GraphQLInt}},
          resolve(parent, args) {
            return userData
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
      userData.push({id: userData.length+1, name: args.name, username: args.username, email: args.email})
     }
   }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery ,mutation: Mutation});