import { Calendar } from 'antd'
import React from 'react'
import { Event } from '../models/event'

type PropsType = {
   events: Event[]
 }

const CalendarComponent: React.FC<PropsType> = () => {
   return (
      <Calendar/>
   )
}

export default CalendarComponent