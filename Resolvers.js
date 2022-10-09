import { UserData } from './data/UserData.js'; //data as we are not using db for now
import { randomBytes } from 'crypto';
const resolvers = {
    Query: {
        getAllUsers: () => UserData,
        userById: (_, { id }) => UserData.find((element) => element.id === id)
    },
    Mutation: {
        signUpUser: (_, { newData }) => {
            const id = randomBytes(5).toString('hex');
            UserData.push(
                {
                    id,
                    ...newData
                }
            );
            const data = UserData.find((element) => element.id === id);
            return data;
        }
    }
}
export default resolvers;