import {MoreVert} from "@material-ui/icons"
import axios from "axios";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styled from "styled-components";
import {format} from "timeago.js";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";



function Post({post}) {
  const [like, setLike] = useState(post.likes.length);
  const [isLike, setIsLike] = useState(false);
  const [user, setUsers] = useState({});
  const {user: currentUser} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  
useEffect(() =>{
    setIsLike(post.likes.includes(currentUser._id))
},[currentUser._id, post.likes])
 

  useEffect(() =>{
    const fetchPost = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUsers(res.data);
    }
    fetchPost();
   },[post.userId])


   const likeHandler = async () => {
    try {
      await axios.put("/post/"+ post._id +"/like", {userId: currentUser._id}) 
    } catch (error) {
        
    }
   setLike(isLike ? like-1 : like+1);
   setIsLike(!isLike);

}
    return (
        <PostStyled>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postLeft">
                        <Link to={`profile/${user.username}`} style={{textDecoration: "none"}}>
                        <img src={user.profilePicture ? PF+user.profilePicture : PF+"/person/noAverta.png" }
                         alt="" className="postProfile" />
                        <span className="postUserName">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                        </Link>
                    </div>
                    <div className="postRight">
                      <MoreVert className="postIcon"/>
                    </div>
                </div>
                <div className="postCenter">
                  <span className="postText">{post?.desc}</span>
                  <img src={PF+post?.img} alt="" className="postImge" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}/Heart.png`} onClick={likeHandler} alt="" className="postImg" />
                        <img src={`${PF}/like.png`} onClick={likeHandler} alt="" className="postImgs" />
                        <span className="postlikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} people comment</span>
                    </div>
                </div>
            </div>
        </PostStyled>
    )
}

const PostStyled = styled(motion.div)`
 width:100%;
 border-radius: 10px;
 -webkit-box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68); 
box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);
margin: 30px 0;

.postWrapper{
    padding: 10px;
}
.postTop{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.postLeft{
    display: flex;
    align-items: center;
}
.postProfile{
    width: 62px;
    height: 62px;
    border-radius: 50%;
    object-fit: cover;
}
.postUserName{
    font-size: 15px;
    font-weight: 500;
    margin: 0 10px;
}
.postDate{
    font-size: 12px;
}
.postCenter{
    margin: 20px 0;
}
.postImge{
    margin-top: 20px;
    width: 100%;
    max-height: 500px;
    object-fit: contain;
}
.postBottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.postBottomLeft{
    display: flex;
    align-items:center;
}
.postImg{
    width: 32px;
    height: 32px;
    margin-right: 5px;
    cursor: pointer;
}
.postImgs{
    width: 42px;
    height: 42px;
    margin-right: 5px;
    cursor: pointer;
}
.postlikeCounter{
    font-size: 15px;
}
.postCommentText{
    cursor: pointer;
    border-bottom: 1px dashed grey;
    font-size: 15px;
}
`

export default  Post;
