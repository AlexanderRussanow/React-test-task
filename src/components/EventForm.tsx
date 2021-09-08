import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { Moment } from "moment";
import React from "react";
import { Event } from "../models/event";
import { User } from "../models/user";
import { dateTransorm } from "../utilits/dateTransform";

type PropsType = {
  users: User[];
  author: string;
};

const EventForm: React.FC<PropsType> = ({ users, author }) => {
  const [event, setEvent] = React.useState({
    author: author,
    guest: "",
    date: "",
    description: "",
  } as Event);

  const selectDate = (date: Moment | null) => {
    if (date) {
      return setEvent({ ...event, date: dateTransorm(date.toDate()) });
    }
  };

  const submitForm = () => {
    console.log(event);
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Event description"
        name="description"
        rules={[{ required: true, message: "Please input Event description" }]}
      >
        <Input
          value={event.description}
          onChange={(e) =>
            setEvent({ ...event, description: e.currentTarget.value })
          }
        />
      </Form.Item>
      <FormItem
        label="Choose date"
        name="date"
        rules={[{ required: true, message: "Please choose Event date" }]}
      >
        <DatePicker onChange={(date) => selectDate(date)} />
      </FormItem>
      <Form.Item
        label="Choose users"
        name="guest"
        rules={[{ required: true, message: "Please input choose user" }]}
      >
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {users.map((u) => (
            <Select.Option key={u.username} value={u.username}>
              {u.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Row>
    </Form>
  );
};

export default EventForm;
