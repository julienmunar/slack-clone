import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react'
import { addDoc,collection, Timestamp} from 'firebase/firestore'
import { db } from './firestore'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firestore'



const ChatInput = ({ channelId, channelName,chatRef }) => {


    const inputRef=useRef(null)
    console.log("inputRef",inputRef)


    const [user, loading, error] = useAuthState(auth);
    const sendMesage =async (e) => {
e.preventDefault()
        if(!channelId){
            return false;
        }
    
        await addDoc(collection(db, `rooms/${channelId}/messages`),{
            message:inputRef.current.value,
            timestamp:Timestamp.now(),
            user: `${user.displayName}`,
            imageUrl:`${user.photoURL}`
        })
        inputRef.current.value = ""
        chatRef.current.scrollIntoView({
            behavior:"smooth"
        })
    }

    return (
        <ChatInputContainer>
            <form>
                <input ref={inputRef} placeholder={`Message #${channelName}`} />
                <button type="submit" onClick={sendMesage}> SEND</button>
            </form>

        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
border-radius:20px ;
>form{
    display:flex;
    justify-content:center;
    position:relative;
}
>form>input{
        position:fixed;
        bottom:30px;
        width:60%;
        border:1px solid gray;
        border-radius:3px ;
        padding:20px;
        outline:none;
     
        }
    
>form > button {
    display:none;
}

`