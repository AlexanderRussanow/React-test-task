import { AuthActionsType, AuthEnum, AuthType } from "./types";

const initialState: AuthType = {
   isAuth: false,
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
      };

    default:
      return state;
  }
}
