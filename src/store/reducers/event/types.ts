import { User } from "./../../../models/user";
import { Event } from "./../../../models/event";

export interface EventState {
  guests: User[];
  events: Event[];
}

export enum EventsEnum {
   SET_GUEST = 'SET_GUEST',
   SET_EVENT = 'SET_EVENT'
}

export interface SetGuestAction {
   type: EventsEnum.SET_GUEST,
   payload: User[]
}

export interface SetEventAction {
   type: EventsEnum.SET_EVENT,
   payload: Event[]
}

export type EventActions = SetGuestAction | SetEventAction