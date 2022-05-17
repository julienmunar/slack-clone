import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SideBarOptions from './SideBarOptions';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection } from 'firebase/firestore';
import { db } from './firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firestore';

const SideBar = () => {
    
  const [user] = useAuthState(auth);
    const [channels, loading, error] = useCollection(
        collection(db, 'rooms'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );
    console.log("channel",channels?.docs)

  return (
    <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>Papa Fam</h2>
                    <h3>
                    <FiberManualRecordIcon/>
                   <span>{user.displayName}</span>
                    </h3>
                </SideBarInfo>
                <CreateIcon/>
            </SideBarHeader>
        <SideBarOptions Icon={InsertCommentIcon} title="Treads"/>
        <SideBarOptions Icon={InboxIcon} title="Mentions & reactions"/>
        <SideBarOptions Icon={DraftsIcon} title="Saved Items"/>
        <SideBarOptions Icon={BookmarkBorderIcon} title="Channel browser"/>
        <SideBarOptions Icon={PeopleAltIcon} title="People & user groups"/>
        <SideBarOptions Icon={AppsIcon} title="Apps"/>
        <SideBarOptions Icon={FileCopyIcon} title="File browser"/>
        <SideBarOptions Icon={ExpandLessIcon} title="Show less"/>
        <hr/>
        <SideBarOptions Icon={ExpandMoreIcon} title="Channel"/>
        <hr/>
        <SideBarOptions Icon={AddIcon} addChannelOption title="Add Channel"/>
        {channels?.docs.map((doc)=>(   <SideBarOptions id={doc.id} key={doc.id}  title={doc.data().name}/>))}
    </SideBarContainer>
  )
}

export default SideBar

const SideBarContainer=styled.div`
background-color:var(--slack-color);
flex:0.3;
border-top:1px solid #49274b ;
max-width:260px;
margin-top:60px ;
color:white;
`

const SideBarHeader=styled.div`
display:flex;
padding:13px;
border-bottom:1px solid #49274b ;
> .MuiSvgIcon-root{
    padding:8px;
    color:#49274b;
    font-size:18px ;
    background-color:white ;
    border-radius:999px ;

}
`


const SideBarInfo=styled.div`
flex:1;
>h2{
   
    font-size:20px ;
    font-weight: 900;
    margin-bottom:5px ;
    
 
  
}
>h3{
    display:flex;
    font-size:13px ;
    font-weight:400 ;
    align-items:center;
    > .MuiSvgIcon-root{
   font-size:14px ;
   margin-top:1px ;
   margin-right:2px;
   color:green;
 
}
>h3>span{
  display:inline;
  text-transform: capitalize !important;
}
}
`
