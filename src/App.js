import React, {useEffect} from 'react';
import { Card, CardHeader, CardFooter, Box, Button, Grommet } from 'grommet';
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';
import {auth} from './fire';

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
        family: 'Exo',
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
            <br/>
            <Link to={user ? "/dashboard" : "/login"}>
              <Box fill> 
                <Card 
                  style={
                      {
                          position: "fixed",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)"
                      }
                  } 
                  height="small" 
                  width="medium" 
                  background="accent-1" 
                  margin="auto" 
                  justify="center">
                      <CardHeader pad="medium">Welcome to Hacky-helper!</CardHeader>
                      <CardFooter pad="medium">
                        <Button primary alignSelf="center" label="Get Started"/>
                      </CardFooter>
                  </Card>
    
              
              </Box>
            </Link>
          </Route>
        </Switch>
    </Router>
    </Grommet>
  );
}

export default App;
