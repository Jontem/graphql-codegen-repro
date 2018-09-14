import gql from "graphql-tag";
import * as Types from "./types";

const query = gql`
  query Query2 {
    vE2_User {
      id
      name
    }
  }
`;
