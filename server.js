import { ApolloServer, gql } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { UserData } from './data/UserData.js'; //data as we are not using db for now

// mainly 3 parts
// 1. Query (to get data: are basically types and structures)
// 2. Mutation (OPTIONAL : to insert/update/delete data)
// 3. Resolvers (to perform what is written in the query: actual function to perform the QUERY and interacts with the db)

// ------------------------------------------------
// QUERY
const typeDefs = gql`
   type Query{
        greet(b:String):String
        user:[Users]
        userById(id:ID):Users
    }
    type Users{
        id:ID
        name:String
        email:String
        phone:String
        password:String
    }
`;
// ------------------------------------------------
// RESOLVERS
const resolvers = {
    Query: {
        greet: (parent, { b }) => parent + "b->" + b, // b -> is the variable name
        user: () => UserData,
        userById: (_, { id }) => UserData.find((element) => element.id === id)
    }
}

// ------------------------------------------------
// making the instance of the apollo server
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    csrfPrevention: true,
    // to enable the playground 
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground({ embed: true })
    ]
});
// & listening to the server
// we can pass the port '3000' or leave empty --
// server.listen().then(({ url }) => console.log(url))
server.listen('3000').then(({ url }) => console.log(url))

