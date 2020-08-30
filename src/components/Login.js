import React  from 'react'
import firebase from 'firebase';
import { auth } from "../fire";
import{Card, CardHeader, Button, CardFooter} from 'grommet';
import {Github} from 'grommet-icons';
import { useHistory } from 'react-router-dom';
// import AppBar from './AppBar';
import { useStateValue } from '../StateProvider';

function Login() {
    
    const [{ user }, dispatch] = useStateValue();

    const history = useHistory();
    const login = event => {
        event.preventDefault();
        var provider = new firebase.auth.GithubAuthProvider();
        provider.addScope('public_repo');
        auth.signInWithPopup(provider).then(function(result) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            history.push('/dashboard');
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    };

    const logout = event => {
        event.preventDefault();
        auth.signOut();
    }

   

    return (
        <div>
        <Card  
        height="small" 
        width="medium" 
        background="light-1" 
        margin="auto" 
        justify="center">
            <CardHeader pad="medium">Welcome to Hacky-help!</CardHeader>
            <CardFooter pad="medium">
            {user ? <Button onClick={logout} type="submit" >Sign out</Button> :
            <Button 
            icon={<Github/>}
            hoverIndicator
            onClick={login} 
            type="submit" primary label="Sign in with github"/>
            }
            </CardFooter>
        </Card>
        
        </div>
    )
}

export default Login;
