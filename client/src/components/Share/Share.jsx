import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"
import axios from "axios";
import { motion } from "framer-motion";
import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";

 function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user} = useContext(AuthContext);
    const desc = useRef();
    const [file, setFile] = useState('');
    const [errorMgs, setErrorMgs] = useState('');
    const submitHandler = async (e) =>{
        console.log("rannnnnnnnnnnnn");
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        
        try{
         if(file){
              
                const data = new FormData();
                const fileName = file.name;
                data.append("file", file);
                data.append("name", fileName);
                newPost.img = fileName;
                await axios.post(`${PF}upload`, data, {
                    
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    
                    
                },

                );
            }

             
        }catch(err) {
          err.response &&  setErrorMgs(err.response.data);
        }
        try{
            await  axios.post("/post", newPost);
        }catch(err){

        }
    }
    return (
        <SharedContainer>
           <div className="shareWrapper">
               <div className="shareTop">
                   <img src={user.profilePicture ? PF+user.profilePicture : PF+"/person/noAverta.png" }
                    alt="" className="shareImg" />
                   <input placeholder={ "what's in your mind " + user.username + "?"} 
                   className="shareInput" ref={desc} />
               </div>
               <hr className="shareHr" />
               <form className="shareBottom"   onSubmit={submitHandler}>
                   <div className="shareOptions">
                       <label htmlFor="file" className="shareOption">
                           <PermMedia htmlColor="tomato" className="shareIcon"/>
                           <span className="shareOptionText">Photo or Video</span>
                           <input style={{display: "none"}} type="file" id="file" 
                            accept="image/*" onChange={(e) =>setFile(e.target.files[0])} />
                       </label>
                       <div className="shareOption">
                           <Label htmlColor="blue" className="shareIcon"/>
                           <span className="shareOptionText">Tags</span>
                       </div>
                       <div className="shareOption">
                           <Room htmlColor="green" className="shareIcon"/>
                           <span className="shareOptionText">Locations</span>
                       </div>
                       <div className="shareOption">
                           <EmojiEmotions htmlColor="gold" className="shareIcon"/>
                           <span className="shareOptionText">Feelings</span>
                       </div>
                       <button className="shareButton" type="submit">Share</button>
                   </div>
               </form>
           </div>
        </SharedContainer>
    )
}

const SharedContainer = styled(motion.div)`
 width: 100%;
 height: 170%;
 border-radius:10px;
 -webkit-box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68); 
box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);
.shareWrapper{
    padding: 10px;
}
.shareTop{
    display:flex;
    align-items: center;
}
.shareImg{
    width: 62px;
    height: 62px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
}
.shareInput{
    border: none;
    width:80%;
    &:focus{
        outline: none;
    }
}
.shareHr{
    margin: 20px;
}
.shareBottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.shareOptions{
    display: flex;
    margin-left: 20px;
}
.shareOption{
 display: flex;
 align-items: center;
 margin-right:15px;
 cursor: pointer;
}
.shareIcon{
    font-size: 18px;
    margin-right: 3px;
}
.shareOptionText{
    font-size: 14px;
    font-weight: 500;
}
.shareButton{
    border: none;
    padding:7px;
    border-radius:5px;
    background-color: green;
    cursor: pointer;
    margin-left: 69px;
    color: white;
}
`

export default Share;