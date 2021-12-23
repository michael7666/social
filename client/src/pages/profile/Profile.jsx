import { motion } from "framer-motion";
import styled from "styled-components";
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/SideBae";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router";


 function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUsers] = useState({});
    const username = useParams().username;

    useEffect(() =>{
        const fetchPost = async () => {
          const res = await axios.get(`/users?username=${username}`);
          setUsers(res.data);
        }
        fetchPost();
       },[username])
    return (
        <>
            <Topbar/>
            <ProfileContainer>
              <Sidebar/>
            <div className="profileRightbar">
                <div className="profileRightTop">
                    <div className="profileCover">
                    <img src={user.coverPicture ? PF+user.coverPicture : PF+"/person/noCover.png"} alt="" className="profileCoverImg" />
                    <img src={user.profilePicture ? PF+user.profilePicture : PF+"/person/noAverta.png"} alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h1 className="profileInfoName">{user.username}</h1>
                        <span className="profileInfoDesc">{user.Desc}</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username={username}/>
                    <RightBar user={user}/>
                </div>
            </div>
            </ProfileContainer>
        </>
       
    )
}

const ProfileContainer = styled(motion.div)`
display: flex;

.profileRightbar{
    flex: 9;
}
.profileCover{
    height: 320px;
    position: relative;
}
.profileCoverImg{
    width: 100%;
    height: 250px;
    object-fit: cover;
    top: 1;
}
.profileUserImg{
    width: 92px;
    height: 92px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 190px;
    border: 3px solid whitesmoke;
}
.profileInfo{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 2px 0;
}
.profileInfoName{
   font-size: 24px;
}
.profileInfoDesc{
    font-weight: 300;
}
.profileRightBottom{
    display: flex;
}

`


export default Profile;
