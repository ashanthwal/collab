import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "./EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

function EventDashboard({ formOpen, setFormOpen, selectEvent, selectedEvent }) {
  const [events, setEvents] = useState(sampleData);

  function handleCreateEvent(event) {
    setEvents([...events, event]);
    setFormOpen(true);
  }

  //Update an event

  function handleUpdateEvent(updatedEvent) {
    setEvents(
      events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
    );
    selectEvent(null);
  }

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
            selectEvent={selectEvent}
            deleteEvent={handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          {formOpen === true && (
            <EventForm
              setFormOpen={setFormOpen}
              setEvents={setEvents}
              createEvent={handleCreateEvent}
              selectedEvent={selectedEvent}
              updatedEvent={handleUpdateEvent}
              key={selectedEvent ? selectedEvent.id : null}
            />
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default EventDashboard;
