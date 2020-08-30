import React from 'react'
import firebase from 'firebase';
import { auth } from "../fire";
import{Card, CardHeader, Button, CardFooter} from 'grommet';
import {Github, Logout} from 'grommet-icons';
import { useHistory } from 'react-router-dom';
// import AppBar from './AppBar';
import { useStateValue } from '../StateProvider';

function Login() {
    
    const [{ user, token }, dispatch] = useStateValue();
    const history = useHistory();
    const login = event => {
        event.preventDefault();
        var provider = new firebase.auth.GithubAuthProvider();
        provider.addScope('public_repo');
        auth.signInWithPopup(provider).then(function(result) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            var tok = result.credential.accessToken;
            console.log("tok is",tok)
            dispatch({
                type: "SET_TOKEN",
                token: tok,
            })
            console.log("token is",token)
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            history.push('/dashboard');
            // ...
          }).catch(function(error) {
            console.log(error);
          });
    };

    const logout = event => {
        event.preventDefault();
        auth.signOut();
    }

   

    return (
        <div className="App">
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
            {user ? 
            <Button
            icon={<Logout/>}
            hoverIndicator 
            onClick={logout} 
            type="submit" 
            color="#000" 
            label="Sign out"/>
             :
            <Button 
            icon={<Github/>}
            hoverIndicator
            onClick={login} 
            type="submit" 
            color="#000" 
            label="Sign in with github"/>
            }
            </CardFooter>
        </Card>
        </div>
    )
}

export default Login;
