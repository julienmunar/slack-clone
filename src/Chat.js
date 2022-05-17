import React, { useRef,useEffect } from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useSelector } from 'react-redux';
import { selectRoom } from './features/AppSlice';
import ChatInput from './ChatInput'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { orderBy } from 'firebase/firestore';

import { collection,doc} from 'firebase/firestore'
import { db } from './firestore';
import Message from './Message';





const Chat = () => {

    const roomId=useSelector(selectRoom)
    console.log('roomID',roomId)
    const [roomDetails] = useDocument(
        roomId && doc(db, `rooms/${roomId}`),orderBy("timestamp","asc"),
        {
          snapshotListenOptions: { includeMetadataChanges: true }
        }
      );

    const [roomMessage,loading] = useCollection(
        roomId && collection(db, `rooms/${roomId}/messages`),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );

      const ChatRef=useRef()

      useEffect(()=>{ChatRef?.current?.scrollIntoView()},[roomId,loading])
    return (
        <ChatContainer>

            <Header>
                <HeaderLeft>
                    <h4><strong>{`# ${roomDetails?.data().name}`}</strong></h4>
                    <StarBorderIcon />
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <HelpOutlineIcon /> Details
                    </p>
                </HeaderRight>
            </Header>

            <ChatMessage>
               {roomMessage?.docs.map(doc=>{const{message,timestamp, user,imageUrl}=doc.data()
               
            return( 
                        <Message message={message} timestamp={timestamp}  user={user} userImage={imageUrl}   />
            )
               
            }
 
             
               )}
            </ChatMessage>

            <ChatBottom ref={ChatRef}/>
            <ChatInput  chatRef={ChatRef}channelId={roomId} channelName={roomDetails?.data().name} />
        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
flex:0.7;
flex-grow:1;
overflow-y:scroll ;
margin-top:60px;
`

const Header = styled.div`
display:flex;
justify-content:space-between;
padding:20px;
border-bottom:1px solid lightgray ;

`
const HeaderLeft = styled.div`
display:flex;
align-items:center;
>h4{
    display:flex;
    text-transform:lowercase ;
    margin-right:20px;
}
`

const HeaderRight = styled.div`

>p{
display:flex;
align-items:center;
font-size:14px;
}
>p >.MuiSvgIcon-root{
margin-right:5px;
font-size:16px ;
}

`

const ChatMessage = styled.div`


`

const ChatBottom=styled.div`
padding-bottom:200px;
`