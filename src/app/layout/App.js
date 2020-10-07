import React, { Fragment, useState } from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Homepage from "../../features/home/Homepage";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventForm from "../../features/events/eventDashboard/EventForm";
import EventDetailedPage from "../../features/events/eventsDetailed/EventDetailedPage";
import Navbar from "../../features/nav/Navbar";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <Fragment>
      <Route path="/" exact component={Homepage} />

      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <Navbar setFormOpen={handleCreateFormOpen} />
            <Container className="main">
              <Route path="/events" exact component={EventDashboard} />
              <Route path="/events/:id" exact component={EventDetailedPage} />
              <Route path="/createEvent" component={EventForm} />
            </Container>
          </>
        )}
      />
    </Fragment>
  );
}

export default App;
