import { Calendar } from "antd";
import { Moment } from "moment";
import React from "react";
import { Event } from "../models/event";
import { dateTransorm } from "../utilits/dateTransform";

type PropsType = {
  events: Event[];
};

const CalendarComponent: React.FC<PropsType> = ({ events }) => {
  function dateCellRender(value: Moment) {
    const listData = dateTransorm(value.toDate());
    const currentDate = events.filter((e) => e.date === listData);

    return (
      <ul>
        {currentDate.map((item, index) => (
          <li key={index}>
            <div>{item.description}</div>
          </li>
        ))}
      </ul>
    );
  }
  return <Calendar dateCellRender={dateCellRender} />;
};

export default CalendarComponent;
