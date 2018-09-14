/* tslint:disable */

export namespace Query1 {
  export type Variables = {};

  export type Query = {
    readonly __typename?: "Query";
    readonly users?: ReadonlyArray<Users | null> | null;
  };

  export type Users = MyFragment.Fragment;
}

export namespace Query2 {
  export type Variables = {};

  export type Query = {
    readonly __typename?: "Query";
    readonly vE2_User?: ReadonlyArray<Ve2User | null> | null;
  };

  export type VE2User = {
    readonly __typename?: "User_Special";
    readonly id: string;
    readonly name: string;
  };
}

export namespace my_fragment {
  export type Fragment = {
    readonly __typename?: "User_Special";
    readonly id: string;
    readonly name: string;
  };
}
