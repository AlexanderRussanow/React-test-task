import { User } from './../../../models/user';

export interface AuthType {
  isAuth: boolean;
  user: User;
  isLoading: boolean;
  error: string;
}

export enum AuthEnum {
  SET_AUTH = "SET_AUTH",
  SET_USER = "SET_USER",
  SET_ERROR = "SET_ERROR",
  SET_LOADING = "SET_LOADING",
}

export interface SetAuthAction {
  type: AuthEnum.SET_AUTH;
  payload: boolean;
}

export interface SetErrorAction {
  type: AuthEnum.SET_ERROR;
  payload: string;
}

export interface SetUserAction {
  type: AuthEnum.SET_USER;
  payload: User;
}

export interface SetLoadingAction {
  type: AuthEnum.SET_LOADING;
  payload: boolean;
}

export type AuthActionsType =
  | SetAuthAction
  | SetErrorAction
  | SetUserAction
  | SetLoadingAction;
