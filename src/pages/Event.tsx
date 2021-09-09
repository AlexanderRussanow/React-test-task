import { Button, Card, Layout, Modal, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import CalendarComponent from "../components/CalendarComponent";
import EventForm from "../components/EventForm";
import { useSelectorType } from "../hooks/useSelectorType";
import { Event } from "../models/event";
import { eventActionCreators } from "../store/actionCreators/actionCreatorsEvents";

const EventComponent: React.FC = () => {
  const [modal, setModal] = React.useState(false);
  const dispatch = useDispatch();
  const { guests, events } = useSelectorType((state) => state.eventReducer);
  const { user } = useSelectorType((state) => state.authReducer);

  const submitEvent = (event: Event) => {
    dispatch(eventActionCreators.createEvent(event));
    console.log(JSON.stringify(events));
    setModal(false);
  };

  React.useEffect(() => {
    dispatch(eventActionCreators.fetchGuest());
    dispatch(eventActionCreators.fetchEvents(user.username));
  }, []);

  return (
    <Layout>
      <Card>
        <Modal
          title="Add new event"
          visible={modal}
          onCancel={() => setModal(false)}
          footer={null}
        >
          <EventForm
            users={guests}
            author={user.username}
            submit={submitEvent}
          />
        </Modal>
        <CalendarComponent events={events} />
        <Row justify="center">
          <Button onClick={() => setModal(true)}>Add event</Button>
        </Row>
      </Card>
    </Layout>
  );
};

export default EventComponent;
