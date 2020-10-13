import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

function EventDashboard() {
  const [events, setEvents] = useState(sampleData);

  /* function handleCreateEvent(event) {
    setEvents([...events, event]);
  }

  //Update an event

  function handleUpdateEvent(updatedEvent) {
    setEvents(
      events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
    );
    selectEvent(null);
  } */

  //Delete an event
  function handleDeleteEvent(eventId) {
    setEvents(events.filter((evt) => evt.id !== eventId));
  }

  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            deleteEvent={handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <h3>Event Filters</h3>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default EventDashboard;
