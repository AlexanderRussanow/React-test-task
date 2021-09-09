import { Badge, Calendar } from 'antd'
import { Moment } from 'moment'
import React from 'react'
import { Event } from '../models/event'

type PropsType = {
   events: Event[]
 }

const CalendarComponent: React.FC<PropsType> = ({events}) => {
   // function dateCellRender(value: Moment) {
   //    const listData = getListData(value);
   //    return (
   //      <ul className="events">
   //        {listData.map(item => (
   //          <li key={item.content}>
   //            <Badge status={item.type} text={item.content} />
   //          </li>
   //        ))}
   //      </ul>
   //    );
   //  }dateCellRender={dateCellRender}
   return (
      <Calendar />
   )
}

export default CalendarComponent