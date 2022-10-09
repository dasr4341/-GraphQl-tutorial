import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import typeDefs from './Schema.js'; // QUERY
import resolvers from './resolvers.js'; // RESOLVERS

// ------------------------------------------------
// mainly 3 parts
// 1. Query (to get data: are basically types and structures)
// 2. Mutation (OPTIONAL : to insert/update/delete data)
// 3. Resolvers (to perform what is written in the query: actual function to perform the QUERY and interacts with the db)
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

