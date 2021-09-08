import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth/isAuth";
import eventReducer from "./reducers/event/index";

const rootReducer = combineReducers({
  authReducer,
  eventReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
