import { motion } from 'framer-motion';
import styled from 'styled-components';
import { User} from "../../demmyData"
import {RssFeed, BookOutlined, HelpOutline, WorkOutline, Event, School, PlayCircleFilledOutlined, Group, Chat} from "@material-ui/icons";
import CloseFriends from '../closeFriend/CloseFriends';

 function SideBae() {
    return (
        <SideBar>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                      <RssFeed className="sidebarIcon" />
                      <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                      <Chat className="sidebarIcon" />
                      <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                      <PlayCircleFilledOutlined className="sidebarIcon" />
                      <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                      <Group className="sidebarIcon" />
                      <span className="sidebarListItemText">Grops</span>
                    </li>
                    <li className="sidebarListItem">
                      <BookOutlined className="sidebarIcon" />
                      <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                      <HelpOutline className="sidebarIcon" />
                      <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                      <WorkOutline className="sidebarIcon" />
                      <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                      <Event className="sidebarIcon" />
                      <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                      <School className="sidebarIcon" />
                      <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendsList">
                    {User.map(u=> (
                        <CloseFriends key={u.id} user={u}/>
                    ))}
                   
                </ul>
            </div>
        </SideBar>
    )
}

const SideBar = styled(motion.div)`
flex: 3;
height: calc(100vh - 50px);
overflow-y: scroll;
position: sticky;
top: 50px;
&::-webkit-scrollbar{
    width: 7px;
}
&::-webkit-scrollbar-track{
   background-color: #f1f1f1;
}
&::-webkit-scrollbar-thumb{
    background-color: gray
}

.sidebarWrapper{
    padding: 20px;
}
.sidebarList{
    padding: 0;
    margin: 0;
    list-style: none;
}
.sidebarListItem{
    display: flex;
    align-items: center;
    margin-bottom: 20px;

}
.sidebarIcon{
    margin-right: 15px;
    cursor: pointer !important;
}
.sidebarListItemText{
    cursor: pointer;
}
.sidebarButton{
    width: 100px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
}
.sidebarHr{
    margin: 20px 0;
}
.sidebarFriendsList{
    margin: 0;
    padding: 0;
    list-style: none;
}

`

export default SideBae;
