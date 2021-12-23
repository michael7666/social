import { motion } from 'framer-motion';
import styled from 'styled-components';
// import {User} from "../../demmyData"
import Online from '../online/Online';
import {useEffect, useState, useContext} from  "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {Add} from "@material-ui/icons"

 function RightBar({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setFriends] =  useState([]);
    const {user: currentUser} = useContext(AuthContext);
    useEffect(() => {
     const getFriends = async() => {
         try {
             const friendList = await axios.get("/users/friends/"+ user._id);
             console.log(user._id)
             setFriends(friendList.data);
         } catch (err) {
            console.log(err); 
         }
     }
     getFriends();
    },[user])

     const HomeRightBar = () => {
         return(
             <>
             {user.username !== currentUser.username && (
                
                 <button className="rightbarFollowButton">
                  Follow<Add/>
                 </button>
             )}
                 <div className="birthdayContainar">
                    <img src={`${PF}/IMG-20160801-WA0010.jpg`} alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>John Jonas</b> and <b>3 other friends</b> have there birthday today</span>
                </div>
                <img src={`${PF}/IMG-20160829-WA0031.jpg`} alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendsList">
                   {user.map(u => (
                       <Online key={u.id} user={u}/>
                   ))}
                
                </ul>
             
             </>
         )
     }

    const ProfileRightBar = () => {
        return(
            <>
             <h1 className="rightInforTitle">User information </h1>
             <div className="rightbarInfo">
                 <div className="rightbarInfoItem">
                     <span className="rightbarInfoKey">City:</span>
                     <span className="rightbarInfoValue">{user.city}</span>
                 </div>
                 <div className="rightbarInfoItem">
                     <span className="rightbarInfoKey">From:</span>
                     <span className="rightbarInfoValue">{user.from}</span>
                 </div>
                 <div className="rightbarInfoItem">
                     <span className="rightbarInfoKey">Relationship:</span>
                     <span className="rightbarInfoValue">{user.relationship ===1 ? "Single" : user.relationship ===2 ? "Married" : "-"}</span>
                 </div>
             </div>
             <h1 className="rightInforTitle">User information </h1>
             <div className="rightbarFollowings">
                 {friends.map(friend =>(
                     <Link to={"/profile/"+friend.username} style={{textDecoration: "none"}}>
                     <div className="rightbarFollowing">
                     <img src={friend.profilePicture ? PF+friend.profilePicture : PF+"/person/noAverta.png"} alt="" className="rightbarFollowingImg" />
                     <span className="rightbarFollowingName">{friend.username}</span>
                 </div>
                 </Link>
                 ))}
                
             </div>
            </>
        )
    }
    return (
        <RightBarStyled>
            <div className="rightbarWrapper">
             {user ? <ProfileRightBar/> : <HomeRightBar/>}
             
            </div>
        </RightBarStyled>
    )
}
const RightBarStyled = styled(motion.div)`
flex: 3.5;
.rightbarWrapper{
    padding: 20px 20px 0 0;
}
.birthdayContainar{
    display: flex;
    align-items: center;
}
.birthdayImg{
    width: 50px;
    height: 50px;
    margin-right: 10px;
}
.birthdayText{
    font-weight: 300;
    font-size: 15px;
}
.rightbarAd{
    width: 100%;
    margin: 30px 0;
    border-radius: 10px;

}
.rightbarTitle{
    margin-bottom: 20px;
}
.rightbarFriendsList{
    margin: 0;
    padding: 0;
    list-style: none;

}

.rightInforTitle{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
}
.rightbarInfo{
    margin-bottom: 30px;
}
.rightbarInfoKey{
    font-weight: 500;
    margin-right: 15px;
}
.rightbarInfoValue{
  font-weight: 300;

}
.rightbarFollowings{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.rightbarFollowingName{
  margin: 4px 0;
  font-weight: 300;
}
.rightbarFollowing{
    display: flex;
    flex-direction: column;
    margin: 10px;

}
.rightbarInfoItem{
    margin-bottom: 10px;
}
.rightbarFollowingImg{
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
    /* margin: 4px; */
}
`
export default RightBar
