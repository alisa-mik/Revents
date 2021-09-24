// import { Button } from "semantic-ui-react";
import React, { useState } from "react";
import EventDashboard from "../../features/events/eventDashborad/EventDashboard";
import { NavBar } from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";


export function App() {
  const [formOpen, setFormOpen] = useState(false)
  return (
    <React.Fragment>
      <NavBar setFormOpen={setFormOpen} />

      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>

    </React.Fragment>


    /* <button className="ui icon red button"><i className="user icon" /> CSS button</button>
    <Button icon='user' content='React button' color='green' /> */

  );
}

