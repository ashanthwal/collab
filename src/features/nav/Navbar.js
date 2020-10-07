import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";

function Navbar({ setFormOpen }) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img
            src="Assets/assets/logo.png"
            alt="logo"
            style={{ marginRight: 15 }}
          />
          Collab
        </Menu.Item>

        <Menu.Item name="Events" as={NavLink} to="/events" />

        <Menu.Item as={NavLink} to="/createEvent">
          <Button
            onClick={() => setFormOpen(true)}
            positive
            inverted
            content="Create Event"
          />
        </Menu.Item>

        <Menu.Item position="right">
          <Button basic inverted content="Sign-in" />
          <Button
            basic
            inverted
            content="Sign-up"
            style={{ marginLeft: "0.5em" }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default Navbar;
