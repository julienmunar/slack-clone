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



function App() {

  const [user, loading, error] = useAuthState(auth);
  console.log('user',user)
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
  );
}

export default App;


const AppBody = styled.div`

display:flex;
height:100vh;
`