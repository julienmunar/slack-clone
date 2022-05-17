import { addDoc } from 'firebase/firestore'
import React from 'react'
import styled from 'styled-components'
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection } from 'firebase/firestore';
import { db } from './firestore';
import { useDispatch } from 'react-redux';
import { enterRoom } from './features/AppSlice';


const SideBarOptions = ({ Icon, title, addChannelOption,id }) => {
    const dispatch=useDispatch()
    const addChannel = async () => {
        const channelName = prompt('Please enter the channel name')

        if (channelName) {
            try {
                await addDoc(collection(db, 'rooms'), {
                    name: channelName,

                })

            }
            catch (error) { console.log(error) }
        }


    }

    const selectChannel = () => {
        if(id){
            dispatch(enterRoom({
                roomId:id
            }))
        }

     }

    return (
        <SideBarOptionsContainer onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
            {Icon ? (<h3>{title}</h3>) : (<SidebarOptionChannel>
                <span>#</span>{title}
            </SidebarOptionChannel>)}
        </SideBarOptionsContainer>
    )
}

export default SideBarOptions


const SideBarOptionsContainer = styled.div`
display:flex;
align-items:center;
font-size:12px;
padding-left:2px ;
cursor: pointer;
:hover{
    opacity:0.9;
    background-color:#340e36 ;
}
>h3{
    font-weight:500 ;
}
>h3 > span{
    padding:15px;
}
`



const SidebarOptionChannel = styled.h3`
padding:10px 0;
font-weight:300;
`