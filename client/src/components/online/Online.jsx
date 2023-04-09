import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';

 function Online({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <OnlineStyle>
             <li className="rightbarFriend">
                        
                <div className="rightbarProfileImgContainer">
                 <img src={user.profile} alt="" className="rightProfileImg" />
                 <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUserName">{user.username}</span>
                 </li>
        </OnlineStyle>
    )
}
const OnlineStyle = styled(motion.div)`
.rightbarFriend{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}
.rightbarProfileImgContainer{
    margin-right: 10px;
    position: relative;
}
.rightProfileImg{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}
.rightbarOnline{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: limegreen;
    position: absolute;
    top: -2px;
    right: 0;
    border: 2px solid white;
}
.rightbarUserName{
    font-weight: 500;
}
`
export default Online;
