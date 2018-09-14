import gql from "graphql-tag";
import * as Types from "./types";

const query = gql`
  query MyQuery {
    users {
      ...MY_User_fragment
    }
  }
  fragment MY_User_fragment on User {
    id
    name
  }
`;
