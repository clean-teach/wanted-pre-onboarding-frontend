export interface IFetchAuthDate {
  email: string;
  password: string;
}
export interface IPropsPostTodos {
  access_token: string;
  todo: string;
}
export interface IPropsGetTodos {
  access_token: string;
}
export interface IPropsPutTodos {
  access_token: string;
  id: number;
  todo: string;
  isCompleted: boolean;
}
export interface IPropsDeleteTodos {
  access_token: string;
  id: number;
}
