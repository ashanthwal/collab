import React from 'react'
import { Menu, Button } from "semantic-ui-react";


function SignedOutMenu({setAuthenticated}) {
    return (
         <Menu.Item position="right">
          <Button onClick={()=>setAuthenticated(true)} basic inverted content="Sign-in" />
          <Button
            basic
            inverted
            content="Sign-up"
            style={{ marginLeft: "0.5em" }}
          />
        </Menu.Item>
    )
}

export default SignedOutMenu
