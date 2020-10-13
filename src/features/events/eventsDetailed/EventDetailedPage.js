import React from "react";
import EventDetailedHeader from "./EventDetailedHeader"
import EventDetailedInfo from "./EventDetailedInfo"
import EventDetailedChat from "./EventDetailedChat"
import EventDetailedSidebar from "./EventDetailedSidebar"
import { Grid } from "semantic-ui-react";

function EventDetailedPage() {
  return(
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader/>
        <EventDetailedInfo/>
        <EventDetailedChat/>
        </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar/>
      </Grid.Column>
    </Grid>
  )
}

export default EventDetailedPage;
