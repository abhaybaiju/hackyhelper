import React, {useState} from 'react';

import { Box, Heading, List, Tab, Tabs, FormField, TextInput } from 'grommet';
import { Info, Code,Catalog,Edit } from 'grommet-icons'
import { useStateValue } from '../StateProvider';  
import AppBar from './AppBar';
import Present from './Present';
import Ideate from './Ideate';
import Develop from './Develop';
import axios from 'axios'



function Dashboard() {
    const names = [];
    var listItems = null;
    const [{ user, token }] = useStateValue();
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

    const [url, seturl ] = useState("https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/file/B8L3o4JEmZIb5epRDvSGZH/HackyHelper?node-id=3%3A2")
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
                    <Tab icon={<Edit/>} title="Design">
                    <Box flex align='center' justify='center'>
                        <br></br>
                    <FormField label="Enter Figma URL">
                        <TextInput placeholder="enter Figma view link"  onChange={event => seturl("https://www.figma.com/embed?embed_host=astra&url="+event.target.value)}/>
                    </FormField>
                        <br></br>
                    <iframe
                      title="figma"
                      height="450"
                      width="800"
                      src={url}
                      allowfullscreen
                    />
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
            <Heading>Hacky Beats 🏖 </Heading>
                <iframe title="spotify" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5Ozry5U6G0d" width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </Box>
            
          </Box>
        </Box>
    )
}

export default Dashboard

