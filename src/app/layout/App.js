import React, { Fragment } from "react";
import { Route, useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Homepage from "../../features/home/Homepage";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventForm from "../../features/events/eventDashboard/EventForm";
import EventDetailedPage from "../../features/events/eventsDetailed/EventDetailedPage";
import Navbar from "../../features/nav/Navbar";

function App() {
  const {key} = useLocation()
  return (
    <Fragment>
      <Route path="/" exact component={Homepage} />

      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <Navbar  />
            <Container className="main">
              <Route path="/events" exact component={EventDashboard} />
              <Route path="/events/:id" exact component={EventDetailedPage} />
              <Route path={["/createEvent", "/manage/:id"]} component={EventForm} key={key} />
            </Container>
          </>
        )}
      />
    </Fragment>
  );
}

export default App;
