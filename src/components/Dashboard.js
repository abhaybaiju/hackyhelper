import React from 'react';
import { Box, Button, Heading, Avatar, Tab, Tabs, DropButton, FormField, TextInput } from 'grommet';
import { Notification } from 'grommet-icons';
import { useStateValue } from '../StateProvider';  
import AppBar from './AppBar';
import Present from './Present';
import Ideate from './Ideate';
import axios from 'axios'
function Dashboard() {

    const [{ user, token }, dispatch] = useStateValue();
    const tok = token;
    axios.get('https://api.github.com/repos/abhaybaiju/hackyhelper/collaborators', {
  headers: {
    'Authorization': `token ${token}`
  }
})
.then((res) => {
  console.log("here is the response",res.data)
})
.catch((error) => {
  console.error(error)
})
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
                    <Box background="dark-2" flex align='center' justify='center'>
                        <Ideate/>
                    </Box>
                    </Tab>
                    <Tab title="Develop">
                        <Box flex align='center' justify='center'>
                            <h1> Develop</h1> <br/><Avatar src={user.photoURL} /> <br/>{user.displayName}
                        </Box>
                    </Tab>
                    <Tab title="Present">
                        <Box flex align='center' justify='center'>
                            <Present/> <br/><Avatar src={user.photoURL} /> <br/>{user.displayName}
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

