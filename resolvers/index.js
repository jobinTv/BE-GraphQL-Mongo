const { insertUser, getUsers } = require('../models/users');

const resolvers = {
    Query: {
        users() {
            return getUsers('users');
        }
    },
    Mutation: {
        createUser(_, { name, username, email } ) {
            return insertUser({ name, username, email }, 'users' );
        }
    }
}
module.exports = { resolvers };