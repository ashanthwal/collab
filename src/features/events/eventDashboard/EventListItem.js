import React from "react";
import EventListAttendee from "./EventListAttendee";
import { Item, Segment, Icon, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {deleteEvent} from "../eventActions"

function EventListItem({ event }) {
  const dispatch = useDispatch();

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>Hosted by {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {event.date}
          <Icon name="marker" /> {event.venue}
        </span>
      </Segment>

      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>

        <Button
          color="red"
          floated="right"
          content="Delete"
          onClick={() => 
            dispatch( deleteEvent(event.id))
          }
        />
        <Button
        as={Link} to={`/events/${event.id}`}
          color="teal"
          floated="right"
          content="View"
          
        />
      </Segment>
    </Segment.Group>
  );
}

export default EventListItem;
