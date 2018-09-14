/* tslint:disable */

export namespace Query1 {
  export type Variables = {};

  export type Query = {
    readonly __typename?: "Query";
    readonly a1?: A1 | null;
    readonly a2?: A2 | null;
    readonly b1?: B1 | null;
  };

  export type A1 = {
    readonly __typename?: "Parent1";
    readonly id: string;
    readonly url: string;
    readonly user?: User | null;
  };

  export type User = {
    readonly __typename?: "User_Special";
    readonly id: string;
    readonly name: string;
  };

  export type A2 = {
    readonly __typename?: "Parent1";
    readonly id: string;
    readonly url: string;
    readonly user?: _User | null;
  };

  export type _User = {
    readonly __typename?: "User_Special";
    readonly id: string;
    readonly name: string;
  };

  export type B1 = {
    readonly __typename?: "Parent2";
    readonly id: string;
    readonly url: string;
    readonly user?: __User | null;
  };

  export type _User = {
    readonly __typename?: "User_Special";
    readonly id: string;
    readonly name: string;
  };
}
