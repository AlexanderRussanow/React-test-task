import { Button, Card, Layout, Modal, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import CalendarComponent from "../components/CalendarComponent";
import EventForm from "../components/EventForm";
import { useSelectorType } from "../hooks/useSelectorType";
import { eventActionCreators } from "../store/actionCreators/actionCreatorsEvents";

const Event: React.FC = () => {
  const [modal, setModal] = React.useState(false);
  const dispatch = useDispatch();
  const { guests } = useSelectorType((state) => state.eventReducer);
  const {user} = useSelectorType(state => state.authReducer)

  React.useEffect(() => {
    dispatch(eventActionCreators.fetchGuest());
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
          <EventForm users={guests} author={user.username}/>
        </Modal>
        <CalendarComponent events={[]} />
        <Row justify="center">
          <Button onClick={() => setModal(true)}>Add event</Button>
        </Row>
      </Card>
    </Layout>
  );
};

export default Event;
