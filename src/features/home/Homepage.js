import React from "react";
import {
  Container,
  Header,
  Segment,
  Image,
  Button,
  Icon,
} from "semantic-ui-react";

function Homepage({ history }) {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/Assets/assets/logo.png"
            style={{ marginBottom: 12 }}
          />
          Collab
        </Header>
        <Button onClick={() => history.push("/events")} size="huge" inverted>
          Get Started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
}

export default Homepage;
