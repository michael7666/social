
import axios from "axios";
import { UploadFailure, UploadStart, UploadSuccess } from "./context/UploadActions";


export const LoginCall = async (userCre, dispatch) =>{
    dispatch({
        type: "LOGIN_START"
    });

    
    try {
        const res = await axios.post("https://spring-brook-9527.fly.dev/api/auth/login", userCre);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    } catch (err) {
        
        dispatch({type: "LOGIN_FAILURE", payload: err});
    }
}

export const UploadCall = async(file, dispatch)=>{
  dispatch(UploadStart());
   try {
      const res = await axios.post("https://spring-brook-9527.fly.dev/api/post/add", file) 
      dispatch(UploadSuccess(res.data));
   } catch (error) {
    dispatch(UploadFailure(error));
   }

}