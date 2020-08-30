import React from 'react'
import { Avatar , Box, Button, Heading } from 'grommet';
import { Logout, UserFemale } from 'grommet-icons';
import { auth } from "../fire";
import { useStateValue } from '../StateProvider';

function AppBar(props) {
    const [{ user }, dispatch] = useStateValue();
    return (
        <Box
          tag='header'
          direction='row'
          align='center'
          justify='between'
          background='brand'
          pad={{ left: 'medium', right: 'small', vertical: 'small' }}
          elevation='medium'
          style={{ zIndex: '1' }}
          {...props}
        >
            <Heading level='3' margin='none'>Hacky Helper</Heading>
            <Box direction='row' align='center'
            justify='between'>
              <Button icon={<Logout />} onClick={() => { if(user){auth.signOut()} else{alert("You are not logged in" )} }} />
            </Box>
        </Box> 
    )
}

export default AppBar
