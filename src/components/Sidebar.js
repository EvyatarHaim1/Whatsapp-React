import React from 'react';
import styled from 'styled-components';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <Div>
            <div className="sidebar_header">
                <Avatar />
                <div className="sidebarHeader_Right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar_search">
                 <div className="sidebarContainer">

                 <SearchOutlined />
                 <input placeholder="Search or start new chat"
                        type="text" 
                        />
                 </div>
            </div>
            <div className="sidebar_chats">
                 <SidebarChat addNewChat/>
                 <SidebarChat />
                 <SidebarChat />
                 <SidebarChat />

            </div>
        </Div>
    )
}

export default Sidebar;

const Div = styled.div`
flex: 0.35;

.sidebar_header{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-right: 1px solid lightgray;
}

.sidebarHeader_Right{
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 10vw;
}

.sidebarHeader_Right > .MuiSvgIcon-root{
    margin-right: 2vw;
    font-size: 24px !important;
}

.sidebar_search{
    display: flex;
    align-items: center;
    background-color:#f6f6f6;
    height: 39px;
    padding: 10px;
}

.sidebarContainer{
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 35px;
    border-radius: 20px;
}

.sidebarContainer > input {
    border: none;
    margin-left: 10px;
}

.sidebarContainer > .MuiSvgIcon-root{
    color: gray;
    padding: 10px;
}

.sidebar_chats{
    flex: 1;
    background-color: white;
    overflow: scroll;
}
`