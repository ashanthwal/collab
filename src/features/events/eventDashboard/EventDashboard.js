import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "./EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

function EventDashboard({ formOpen, setFormOpen }) {
  const [events, setEvents] = useState(sampleData);
  return (
    <div>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          {formOpen === true && (
            <EventForm setFormOpen={setFormOpen} setEvents={setEvents} />
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default EventDashboard;
