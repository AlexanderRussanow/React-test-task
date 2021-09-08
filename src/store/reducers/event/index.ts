import { EventActions, EventsEnum, EventState } from "./types";

const initialState: EventState = {
  guests: [],
  events: [],
};

export default function eventReducer(
  state = initialState,
  action: EventActions
): EventState {
  switch (action.type) {
    case EventsEnum.SET_GUEST:
      return {
        ...state,
        guests: action.payload,
      };
    case EventsEnum.SET_EVENT:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
}
