// import { Button } from "semantic-ui-react";
import React, { useState } from "react";
import EventDashboard from "../../features/events/eventDashborad/EventDashboard";
import { NavBar } from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";


export function App() {
  const [formOpen, setFormOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  function handleSelectEvent(event) {
    setSelectedEvent(event)
    setFormOpen(true)
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null)
    setFormOpen(true)
  }
  return (
    <React.Fragment>
      <NavBar setFormOpen={handleCreateFormOpen} />

      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} selectedEvent={selectedEvent} selectEvent={handleSelectEvent} />
      </Container>

    </React.Fragment>


    /* <button className="ui icon red button"><i className="user icon" /> CSS button</button>
    <Button icon='user' content='React button' color='green' /> */

  );
}

