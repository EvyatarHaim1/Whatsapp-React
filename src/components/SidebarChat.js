import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

function SidebarChat({ addNewChat }) {

   const [ seed, setSeed ] = useState('');

   useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000 ));
   },[])

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
        if(roomName){
            
        }
    }

    return !addNewChat ? (
        <Div>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat_info">
                <h2>Room Name </h2>
                <p>Last message...</p>
            </div>
        </Div>
    ) : (
        <Div onClick={createChat}>
            <h2>Add new chat </h2>
        </Div>
    );
}

export default SidebarChat;

const Div = styled.div`
display:flex;
padding: 20px;
cursor: pointer;
border-bottom: 1px solid #f6f6f6;

:hover{
    background-color: #ebebeb;
}

.sidebarChat_info > h2 {
    font-size: 16px;
    margin-bottom: 8px;
}

.sidebarChat_info{
    margin-left: 15px; 
}


`
