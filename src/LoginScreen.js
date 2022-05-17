import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { auth } from './firestore'
import {  signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const LoginScreen = () => {

 

  const provider = new GoogleAuthProvider();
const  signIn=(e)=>{
  e.preventDefault()
signInWithPopup(auth,provider).then((result)=>{
  const user=result?.user
  
})
  
}
  return (
    <LoginScreenContainer>
      <LoginInnerContainer>
<img src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg' width="100"/>
<h1>Sign in to the Papa</h1>
<p>papa.slack.com</p>

<Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>


    </LoginScreenContainer>
  )
}

export default LoginScreen



const LoginScreenContainer = styled.div`

background-color:#f8f8f8;
display:grid;
place-items:center;
height:100vh;


`

const LoginInnerContainer = styled.div`
padding:100px;
text-align:center;
background-color:white ;
border-radius:10px;
box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24) ;
>img{
  object-fit:contain;
  margin-bottom:40px ;
}
>button{
  margin-top:50px;
  text-transform: inherit!important ;
  background-color: #0a8d48 !important ;
  color:white;
}
`