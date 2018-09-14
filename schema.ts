import { buildSchema } from "graphql";

export const schema = buildSchema(`

type User_Special {
    id: String!
    name: String!
}

type Parent1 {
    id: String!
    url: String!
    user: User_Special
}

type Parent2 {
    id: String!
    url: String!
    user: User_Special
}


type Query {
    parent1: Parent1
    parent2: Parent2
}
`);
