import React from 'react'
import { Box, Button, Heading,Grommet } from 'grommet';
import { Notification, Logout } from 'grommet-icons';
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
            <Button icon={<Notification />} onClick={() => {}} />
            </Box>
        </Box> 
    )
}

export default AppBar
