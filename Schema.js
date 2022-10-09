import { gql } from "apollo-server";
const typeDefs = gql`
   type Query{
        getAllUsers:[User]
        userById(id:ID):User
    }
    type User{
        id:ID
        name:String
        email:String
        phone:String
        password:String
    }
    type Mutation{
        signUpUser(newData:UserInput!):User
    }
    input UserInput{
        name:String!
        email:String!
        phone:String!
        password:String!
    }
`;
export default typeDefs;