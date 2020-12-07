import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

function SidebarChat() {

   const [ seed, setSeed ] = useState('')

   useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000 ));
   })

    return (
        <Div>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat_info">
                <h2>Room Name </h2>
                <p>Last message...</p>
            </div>
        </Div>
    )
}

export default SidebarChat;

const Div = styled.div``
