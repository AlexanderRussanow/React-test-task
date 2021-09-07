export interface AuthType {
  isAuth: boolean;
}

export enum AuthEnum {
  SET_AUTH = "SET_AUTH",
}

export interface SetAuthAction {
  type: AuthEnum.SET_AUTH;
  payload: boolean;
}

export type AuthActionsType = SetAuthAction;
