import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

function Navbar({ setFormOpen }) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="Assets/assets/logo.png"
            alt="logo"
            style={{ marginRight: 15 }}
          />
          Collab
        </Menu.Item>

        <Menu.Item name="Events" />

        <Menu.Item>
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
