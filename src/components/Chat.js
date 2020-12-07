import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined, MoreVert } from '@material-ui/icons';

function Chat() {

   const [ seed, setSeed ] = useState('');
    
   useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000 ));
   },[])

    return (
        <Div>
            <div className="chat_header">
                 <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                 <div className="chatHeader_info">
                     <h3>Room Name</h3>
                     <p>Last seen at ...</p>
                 </div>

                 <div className="chatHeader_right">
                 <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                 </div>
            </div>

            <div className="chat_body">

            </div>

            <div className="chat_footer">

            </div>
        </Div>
    )
}

export default Chat;

const Div = styled.div`
flex: 0.65;
display: flex;
flex-direction: column;

.chat_header{
    padding: 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
}

.chatHeader_info{
    flex: 1;
    padding-left: 20px;
}

.chatHeader_info > h3{
    margin-bottom: 3px;
    font-weight: 500;
}

.chatHeader_info > p {
    color: gray;
}

.chatHeader_right{
    display: flex;
    justify-content:space-between;
    min-width: 100px;
}

.chat_body{
    flex: 1;
    background-image: url("https://i.redd.it/qwd83nc4xxf41.jpg");
    background-repeat: repeat;
    background-position: center;
    padding: 30px;
    overflow:scroll;
}
`
