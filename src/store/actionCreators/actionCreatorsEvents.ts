import { AppDispatch } from './../index';
import { EventsEnum, SetEventAction, SetGuestAction } from './../reducers/event/types';
import { User } from "../../models/user";
import { Event } from '../../models/event';
import axios from 'axios';

export const eventActionCreators = {
   setGuest: (guests: User[]): SetGuestAction => ({type: EventsEnum.SET_GUEST, payload: guests}),
   setEvent: (events: Event[]): SetEventAction => ({type: EventsEnum.SET_EVENT, payload: events}),
   fetchGuest: () => async (dispatch: AppDispatch) => {
      try {
         const {data} = await axios.get<User[]>('./user.json')
         dispatch(eventActionCreators.setGuest(data))
      } catch (e) {
         console.log(e)
      }
   }
}