import { User } from "./../../../models/user";
import { AuthActionsType, AuthEnum, AuthType } from "./types";

const initialState: AuthType = {
  isAuth: false,
  user: {} as User,
  error: "",
  isLoading: false,
};

export default function authReducer(
  state = initialState,
  action: AuthActionsType
): AuthType {
  switch (action.type) {
    case AuthEnum.SET_AUTH:
      return {
        ...state,
        isAuth: action.payload,
        isLoading: false,
      };
    case AuthEnum.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case AuthEnum.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case AuthEnum.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
}
