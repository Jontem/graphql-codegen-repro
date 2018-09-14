import { GraphQLSchema, buildSchema } from "graphql";

export const schema = buildSchema(`

type User_Special {
    id: String!
    name: String!
}


type Query {
    users: [User_Special]
    vE2_User: [User_Special]
}
`);
