import React from 'react';

import { Box, Button, Heading, List, Avatar, Tab, Tabs, DropButton, FormField, TextInput } from 'grommet';
import { Info, Code,Catalog } from 'grommet-icons'
import { useStateValue } from '../StateProvider';  
import AppBar from './AppBar';
import Present from './Present';
import Ideate from './Ideate';
import Develop from './Develop';
import axios from 'axios'
function Dashboard() {
    const names = [];
    var listItems = null;
    const [{ user, token }, dispatch] = useStateValue();
    //const tok = token;
    axios.get('https://api.github.com/repos/abhaybaiju/hackyhelper/collaborators', {
  headers: {
    'Authorization': `token ${token}`
  }
})
.then((res) => {
  const data = res.data;
  data.map(id => {names.push(id.login)})
  listItems = names.map((name) =>
  <li>{name}</li>
);
  console.log(names[0]);
  console.log(names);

  
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
                    <Tab icon={<Info/>} title="Ideate">
                    <Box background="dark-2" flex align='center' justify='center'>
                        <Ideate/>
                    </Box>
                    </Tab>
                    <Tab icon={<Code/>} title="Develop">
                        <Develop/>
                    </Tab>
                    <Tab icon={<Catalog/>} title="Present">
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
                <Heading>Collaborators</Heading>
                <List
            primaryKey="name"
            
            data={[
                { name: 'abhaybaiju'},
                { name: 'adityaoberai'},
                { name: 'eKuG'},
                { name: 'SimranMakhija7' },
            ]}
            />
            </Box>
            
          </Box>
        </Box>
    )
}

export default Dashboard

