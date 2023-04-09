import {Search, Person, Chat, Notifications} from "@material-ui/icons";
import {Link} from "react-router-dom";
import { motion} from "framer-motion";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Topbar() {
  
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <TopBarStlyed>
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration: "none"}}>
                <span className="logo">Blog Post</span>
                </Link>
               
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                   <Search className="searchIcon"/>
                   <input placeholder="search for friends post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <span className="topbarLink">HomePage</span>
                <span className="topbarLink">TimeLine</span>
            </div>
            <div className="topbarIcons">
               <div className="topbarIconItem">
                  <Person/>
                 <span className="topbarIconBadge">1</span>
               </div>
               <div className="topbarIconItem">
                  <Chat/>
                 <span className="topbarIconBadge">2</span>
               </div>
               <div className="topbarIconItem">
                  <Notifications/>
                 <span className="topbarIconBadge">3</span>
               </div>
            </div>
            <Link to={`/profile/${user.username}`}>
            <img src={ user.profilePicture ? user.profilePicture : PF+"/person/noAverta.png"}
             alt="" className="topbarImg" />
             </Link>
        </div>
        </TopBarStlyed>
    )
}

const TopBarStlyed = styled(motion.div)`
/* max-width: 100%;
width: 100%;
height: 100%; */
 
 .topbarContainer{
     height: 50px;
     width: 100%;
     background-color: #1877f2;
     display: flex;
     align-items: center;
     position: sticky;
     top: 0;
 }
 .topbarLeft{
     flex: 3;
 }
 .logo{
     font-size: 24px;
     margin-left: 20px;
     color: white;
     font-weight: bold;
     cursor: pointer;
 }
 .topbarCenter{
     flex: 5;
 }
 .searchbar{
   width: 100%;
   height: 30px;
   background-color: white;
   border-radius: 30px;
   display: flex;
   align-items: center;
 }
 .searchIcon{
     margin-left: 10px !important;
     font-size: 20px;
 }
 .searchInput{
     border: none;
     width: 70%;

     &:focus{
         outline: none;
     }
 }
 .topbarRight{
  flex: 4;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-around;
 }
 .topbarLink{
     margin-right: 10px;
     font-size: 20px;
     cursor: pointer;
 }
 .topbarIcons{
     display: flex;
 }
 .topbarIconItem{
     margin-right: 15px;
     cursor: pointer;
     position: relative;
 }
 .topbarIconBadge{
     width:15px;
     height:15px;
     background-color: red;
     border-radius: 50%;
     color: white;
     position: absolute;
     top: -5px;
     right: -5px;
     display:flex;
     align-items: center;
     justify-content: center;
     font-size: 12px;

 }
 .topbarImg{
     width: 32px;
     height: 32px;
     border-radius:50%;
     object-fit: cover;
 }

`

export default  Topbar;