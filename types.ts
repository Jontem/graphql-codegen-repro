/* tslint:disable */

export namespace MyQuery {
  export type Variables = {};

  export type Query = {
    readonly __typename?: "Query";
    readonly users?: ReadonlyArray<Users | null> | null;
  };

  export type Users = MyUserFragment.Fragment;
}

export namespace MY_User_fragment {
  export type Fragment = {
    readonly __typename?: "User";
    readonly id: string;
    readonly name: string;
  };
}
