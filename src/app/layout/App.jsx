// import { Button } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashborad/EventDashboard";
import { NavBar } from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { HomePage } from "../../features/home/HomePage";
import { EventDetailedPage } from "../../features/events/eventDetailed/EventDetailedPage";
import { EventForm } from "../../features/events/eventForm/EventForm";


export function App() {

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route path='/(.+)' render={() => (
        <>
          <NavBar />
          <Container className='main'>
            <Route exact path='/events' component={EventDashboard} />
            <Route path='/events/:id' component={EventDetailedPage} />
            <Route path={['/createEvent', '/manage/:id']} component={EventForm} />
          </Container>
        </>
      )}



      />
    </>


    /* <button className="ui icon red button"><i className="user icon" /> CSS button</button>
      <Button icon='user' content='React button' color='green' /> */

  );
}

