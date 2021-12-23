import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "../post/Post";
import Share from  "../Share/Share";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";



 function Feed({username}) {
     const [post, setPost] = useState([]);
     const {user} = useContext(AuthContext);
     useEffect(() =>{
      const fetchPost = async () => {
        const res = username ? await axios.get("/post/profile/"+ username) 
        : await axios.get("/post/timeline/" + user._id);
        setPost(res.data.sort((p1, p2)=>{
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        }));
        
      }
      fetchPost();
     },[username, user._id])
    return (
        <FeedStyled>
            <div className="feedWrapper">
              {(!username || username === user.username) && <Share/>}
               {post.map((p) => (
                 <Post key={p._id} post={p}/>
               ))}
               
               
            </div>
        </FeedStyled>
    )
}

const FeedStyled = styled(motion.div)`
flex: 5.5;

.feedWrapper{
    padding: 20px;
}
`

export default Feed;
