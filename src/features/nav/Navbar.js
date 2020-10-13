import React ,{useState}from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

function Navbar({ setFormOpen }) {
  const history= useHistory();
  const[authenticated, setAuthenticated] = useState(false)

  function handleSignout(){
    setAuthenticated(false)
    history.push('/')
  }
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
            positive
            inverted
            content="Create Event"
          />
        </Menu.Item>
        {authenticated ?(<SignedInMenu signOut={handleSignout}/>
         ): (<SignedOutMenu setAuthenticated={setAuthenticated}/>)}

  </Container>
    </Menu>
  );
}

export default Navbar;
