import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase';
import { useStateValue } from '../store/StateProvider';
import { actionTypes } from '../store/reducer';

function Login() {

   const [{}, dispatch ] =useStateValue();

   const signIn = () => {
      auth.signInWithPopup(provider)
      .then((result) => {
          dispatch({
              type: actionTypes.SET_USER,
              user: result.user,
          });
      })
      .catch(error => alert(error.messge))
        
   }

    return (
        <Div>
             <div className="login_container">
                 <img 
                     src="data:image/jpeg;base64,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"
                     alt="WHATSAPP_LOGO"
                 />
                 <div className="login_text">
                     <h1> Sign In With WhatsApp </h1>
                 </div>

                 <Button type="submit" onClick={signIn}>
                    Sign In With Google
                 </Button>
             </div> 
        </Div>
    )
}

export default Login;

const Div = styled.div`
background-color: white;
height: 100vh;
width: 100vw;
display: grid;
place-items: center;

.login_container{
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 3px rgba(0,0,0,0.12);
}

.login_container > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
}

.login_container > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48;
    color: white;
}
`
