import gql from "graphql-tag";
import * as Types from "./types";

const query = gql`
  query Query1 {
    users {
      ...my_fragment
    }
  }
  fragment my_fragment on User_Special {
    id
    name
  }
`;
