import React from 'react';
import { Box, Button, Heading, Avatar, Tab, Tabs, DropButton, FormField, TextInput } from 'grommet';
import { Notification } from 'grommet-icons';
import { useStateValue } from '../StateProvider';  
import AppBar from './AppBar';

function Dashboard() {

    const [{ user }, dispatch] = useStateValue();


    return (
        <Box fill>
          <AppBar/>
            
        
          <Box direction='row' fill  overflow={{ horizontal: 'hidden' }} alignContent="center">
              <Box flex>
              <DropButton
                label="Add Teammates"
                dropAlign={{ top: 'bottom', right: 'right' }}
                dropContent={
                    <Box>
                    <FormField label="Enter email">
                        <TextInput placeholder="type here" />
                    </FormField>
                    <Button primary>Click to Add</Button>
                    </Box>
                }
                />
                  <Tabs alignControls="stretch">
                    <Tab title="Ideate">
                    <Box flex align='center' justify='center'>
                        <h1> Ideate</h1> <br/><Avatar src={user.photoURL} /> <br/>{user.displayName}
                    </Box>
                    </Tab>
                    <Tab title="Develop">
                        <Box flex align='center' justify='center'>
                            <h1> Develop</h1> <br/><Avatar src={user.photoURL} /> <br/>{user.displayName}
                        </Box>
                    </Tab>
                    <Tab title="Present">
                        <Box flex align='center' justify='center'>
                            <h1> Present</h1> <br/><Avatar src={user.photoURL} /> <br/>{user.displayName}
                        </Box>
                    </Tab>
                  </Tabs>
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

