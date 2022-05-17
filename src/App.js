import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components'

import Header from './Header';
import SideBar from './SideBar';
import Chat from './Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from './firestore'
import LoginScreen from "./LoginScreen"
import Spinner from "react-spinkit";



function App() {

  const [user, loading, error] = useAuthState(auth);
  console.log('user',user)

  if (loading) {return(
    <AppLoading>
      <AppLoadingContents>
        <img src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'/>
        <Spinner name="ball-spin-fade-loader" color="purple"
        fadIn="none"
        />
      </AppLoadingContents>
    </AppLoading>
  )}
      return (
    <Router>
{!user ? (<LoginScreen/>):(      <AppBody>
        <SideBar />
        <Routes>
          <Route path="/" element={<Header />}>
          </Route>
        </Routes>
        <Chat/>
      </AppBody>)}

    </Router>
  
  )

}

export default App;


const AppBody = styled.div`

display:flex;
height:100vh;
`

const AppLoading=styled.div`
display:grid;
place-items:center ;
height:100vh;
width:100%;
`
const AppLoadingContents=styled.div`

text-align:center;
padding-bottom: 100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
>img{
  height:100px;
  padding:20px;
}
`