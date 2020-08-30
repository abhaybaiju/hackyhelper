import React from 'react'
import {  Grommet, Header, Button, Nav,  Anchor, Avatar } from 'grommet';
import { Logout } from 'grommet-icons';
import { auth } from "../fire";
import { useStateValue } from '../StateProvider';
import { grommet } from 'grommet/themes';


function AppBar(props) {
    const [{ user }] = useStateValue();
    return (
      <Grommet theme={grommet}>
        <Header background="dark-2" pad="small">
          <Anchor
          href="/"
          label="Hacky Helper"
          color="#FFF"
          />
          <Nav direction="row">
            <Button  label ="Logout" icon={<Logout />} onClick={() => { if(user){auth.signOut()} else{alert("You are not logged in" )} }} />
            <Avatar src={user.photoURL} />   
          </Nav>
        </Header>
      </Grommet>
        
    )
}

export default AppBar
