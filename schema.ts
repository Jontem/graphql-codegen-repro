import { GraphQLSchema, buildSchema } from "graphql";

export const schema = buildSchema(`

type User {
    id: String!
    name: String!
}

type Query {
    users: [User]
}
`);
