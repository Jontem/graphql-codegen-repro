import gql from "graphql-tag";
F
const query = gql`
  query Query1 {
    a1: parent1 {
      id
      url
      user {
        id
        name
      }
    }
    a2: parent1 {
      id
      url
      user {
        id
        name
      }
    }

    b1: parent2 {
      id
      url
      user {
        id
        name
      }
    }
  }
`;
