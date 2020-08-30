import React from 'react';
import { Box,  Avatar, Tab, Tabs} from 'grommet';

import { useStateValue } from '../StateProvider';  
import AppBar from './AppBar';
import Present from './Present';
import Ideate from './Ideate';
import axios from 'axios'
function Dashboard() {

    const [{ user, token }] = useStateValue();
    //const tok = token;
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
          <br/>
          <Box direction='row' fill  overflow={{ horizontal: 'hidden' }} alignContent="center">
              <Box flex>
                  <Tabs alignControls="stretch">
                    <Tab title="Ideate">
                    <Box background="dark-2" flex align='center' justify='center'>
                        <Ideate/>
                    </Box>
                    </Tab>
                    <Tab title="Develop">
                        <Box flex align='center' justify='center'>
                            <h1> Develop</h1> <br/>
                        </Box>
                    </Tab>
                    <Tab title="Present">
                        <Box flex align='center' justify='center'>
                            <Present/> <br/>
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
              <Avatar src={user.photoURL} /> <br/>{user.displayName} 
            </Box>
            
          </Box>
        </Box>
    )
}

export default Dashboard

