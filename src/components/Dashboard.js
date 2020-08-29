import React from 'react';
import { Box, Button, Heading, Avatar } from 'grommet';
import { Notification } from 'grommet-icons';
import { useStateValue } from '../StateProvider';  
import AppBar from './AppBar';

function Dashboard() {

    const [{ user }, dispatch] = useStateValue();


    return (
        <Box fill>
          <AppBar/>
            
        
          <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
            <Box flex align='center' justify='center'>
             <h1> Welcome</h1> <br/><Avatar src={user.photoURL} /> <br/>{user.displayName}
            </Box>
            <Box
              width='medium'
              background='light-2'
              elevation='small'
              align='center'
              justify='center'
            >
              sidebar
            </Box>
          </Box>
        </Box>
    )
}

export default Dashboard

