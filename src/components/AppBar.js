import React from 'react'
import {  Grommet, Header, Button, Nav, Heading, Anchor } from 'grommet';
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
          </Nav>
        </Header>
      </Grommet>
        // {<Box
        //   tag='header'
        //   direction='row'
        //   align='center'
        //   justify='between'
        //   background='brand'
        //   pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        //   elevation='medium'
        //   style={{ zIndex: '1' }}
        //   {...props}
        // >
        //     <Heading level='3' margin='none'>Hacky Helper</Heading>
        //     <Box direction='row' align='center'
        //     justify='between'>
        //       <Button icon={<Logout />} onClick={() => { if(user){auth.signOut()} else{alert("You are not logged in" )} }} />
        //     </Box>
        // </Box>} 
    )
}

export default AppBar
