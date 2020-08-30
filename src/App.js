import React, {useEffect} from 'react';
import { Box, Button, Grommet } from 'grommet';
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';
import {auth} from './fire';
import AppBar from './components/AppBar';

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
		dispatch({
			type: "SET_USER",
			user: authUser
		})
      }
      else{
		dispatch({
			type: "SET_USER",
			user: null
		})
	  }
	  console.log(authUser)

	});

	return() => {
		unsubscribe();
	};

  }, [dispatch])


  const theme = {
    global: {
      colors: {
        brand: '#228BE6',
      },
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  

  return (
    <Grommet theme={theme} full>
      <Router>
        <Switch>
          <Route path="/login">
              <Login/>
          </Route>
          { user && 
          <Route path="/dashboard" component={Dashboard} />
        }
          <Route path="/">
            <AppBar/>
            <br/>
            <Link to={user ? "/dashboard" : "/login"}>
              <Box fill> 
              <Button primary alignSelf="center">Get Started</Button>
              </Box>
            </Link>
          </Route>
        </Switch>
    </Router>
    </Grommet>
  );
}

export default App;
