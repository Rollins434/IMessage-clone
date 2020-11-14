/* eslint-disable no-unused-vars */
import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css'
import {auth, provider} from './firebase'
 function Login() {
    
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
<div className="login__logo">
            <img src="https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Chat-2-512.png" alt="hi"/>

            <h3>iMessage</h3>
            
        </div>
        <Button onClick ={signIn}>Sign In</Button>
        </div>
        
    )
}
export default Login;