import React from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from './firestore'
function Header() {
    const [user, loading, error] = useAuthState(auth);
  return (
    <HeaderContainer>
        
        <HeaderLeft>
            <HeaderAvatar  src={user.photoURL} onClick={()=>{auth.signOut()}}/> 
            <AccessTimeIcon/>
        </HeaderLeft>
        <HeaderSearch>
            <SearchIcon/>
            <input placeholder='Search '/>
        </HeaderSearch>
        <HeaderRight>
            <HelpOutlineIcon/>
        </HeaderRight>
    </HeaderContainer>

  )
}

export default Header


const HeaderContainer=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:10px 0;
background-color: var(--slack-color);
color:white;
width:100%;
position:fixed;
`
const HeaderLeft=styled.div`
flex:0.3;
display:flex;
align-items:center;
margin-left:20px ;
> .MuiSvgIcon-root{
    margin-left: auto;
    margin-right:30px ;
}

`
const HeaderSearch=styled.div`
flex:0.4;
display:flex;
background-color:#421f44;
border-radius: 6px;
padding:0 50px;
color:grey;
border:1px gray solid;



>input{
    background-color:transparent ;
    min-width:30vw ;
    outline:none;
    border:none;
    text-align:center ;
    color:white;
}

`
const HeaderRight=styled.div`
flex:0.3;
display:flex;
justify-content:flex-end;
> .MuiSvgIcon-root{
  margin-right:20px ;

}
`
const HeaderAvatar=styled(Avatar)`
cursor: pointer;
:hover{
    opacity:0.8;
}
`