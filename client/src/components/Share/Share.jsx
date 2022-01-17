import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { motion } from "framer-motion";
import { useContext, useRef, useState } from "react";
import styled from "styled-components";
// import { UploadCall } from "../../apiCalls";
import { AuthContext} from "../../context/AuthContext";
// import { UploadContext } from "../../context/UploadContext";
// import {storage} from "../../firebase";
// import {storage} from "../../firebase"
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import app from "../../firebase";
import {storage} from "../../firebase"
// import { useHistory } from 'react-router';

 function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user} = useContext(AuthContext);
    const desc = useRef();
    const [files, setFile] = useState('');
    const [progress, setProgress] = useState();
    // const dispatch = useContext(UploadContext)
    // const [errorMgs, setErrorMgs] = useState('');
    // const history = useHistory()


    const upload = async ()=>{
        if(!files) return;

        const storageRef = ref(storage, `/file/${files.name}`);
        const uploadTask = uploadBytesResumable(storageRef, files);

        uploadTask.on("state_changed", snapshot =>{
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress);
        },
        (err)=>{console.log(err)}, ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then(url=>{
                console.log(url);
                setFile(url);
                // const res =  axios.post("/upload/add", url);
                // return res.data;

            })
        }
        )
        
    }

    const submitHandler = async  (e) =>{
        e.preventDefault();
        const newPost = {
            userId: user?._id,
            desc: desc.current.value,
            files
        }
        upload(files);
        try{
        const res =  await axios.post("/post/add", newPost);
         return res.data;
      
        }catch(err){
          console.log(err);
        }
        setFile('');
    }

    const reloadPage = ()=>{
        window.location.reload();
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
               <form className="shareBottom" encType="multipart/form-data"   onSubmit={submitHandler}>
                   <div className="shareOptions">
                       <label htmlFor="file" className="shareOption">
                           <PermMedia htmlColor="tomato" className="shareIcon"/>
                           <span className="shareOptionText">Photo or Video</span>
                           <input style={{display: "none"}} type="file" id="file" name="img"
                            accept="images/*" onChange={(e) =>setFile(e.target.files[0])} />
                       </label>
                       <p>{progress}</p>
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
                       <button className="shareButton" type="submit" onClick={reloadPage}>Share</button>
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