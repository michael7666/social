import { motion } from 'framer-motion';
import  { useContext, useRef } from 'react'
import styled from 'styled-components';
import {LoginCall} from "../../apiCalls";
import { AuthContext } from '../../context/AuthContext';
import {CircularProgress} from "@material-ui/core";

 function Login() {
     const email = useRef();
     const password = useRef();
     const { user, isfetching, dispatch } = useContext(AuthContext);
     const handleSubmit = (e) =>{
        e.preventDefault();
        LoginCall({email: email.current.value, password: password.current.value},dispatch );
        // await user.save();
        return user;
     }

    return (
        <LoginStyled>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLog">Social Media</h3>
                    <span className="loginDesc">
                        Connect with Friends and the world around you on Social Media.
                    </span>
                </div>
                <div className="loginRight" onSubmit={handleSubmit}>
                    <form className="loginBox">
                        <input placeholder="Email" type="email" className="loginInput" required ref={email}/>
                        <input placeholder="password" type="password"  className="loginInput" 
                        required minLength="6" ref={password} />
                        <button className="loginButton " type="submit" disabled={isfetching}>{isfetching? <CircularProgress style={{color: "white"}} 
                        size="20px" /> : "Login"}</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton" type="submit"> {isfetching? <CircularProgress style={{color: "white"}} size="20px" /> : "Create a New Account"}</button>
                    </form>
                </div>
            </div>
        </LoginStyled>
    )
}

const LoginStyled = styled(motion.div)`
width: 100vw;
height:100vh;
background-color: #f0f2f5;
display: flex;
align-items: center;
justify-content: center;

.loginWrapper{
    width: 70%;
    height: 70%;
    display: flex;
}
.loginLeft,.loginRight{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.loginLog{
    font-size: 50px;
    font-weight: 800;
    color: #1775ee;
    margin-bottom: 15px;
}
.loginDesc{
    font-size:24px;
}
.loginBox{
    height: 300px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


}
.loginInput{
    height: 50px;
    border-radius: 10px;
    border: 1px solid gray;
    font-size: 18px;
    padding-left: 20px;

    &:focus{
        outline: none;
    }
}
.loginButton{
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color:#1775ee;
    font-size: 20px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    &:focus{
        outline: none;
    }
    &:disabled{
        cursor:not-allowed;
    }

}
.loginForgot{
  text-align: center;
  color: #1775ee;
}
.loginRegisterButton{
    width: 60%;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color:#42b72a;
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  padding-left: 30px;
  align-self: center;
}
`

export default Login;
