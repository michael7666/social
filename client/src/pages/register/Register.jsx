import styled from "styled-components";
import {motion} from "framer-motion";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";

 function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();


    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Password don't Match!");
        }else{
         const user = {
               username: username.current.value,
               email: email.current.value,
               password: password.current.value
            };
            try {
                 await axios.post("/auth/register", user);
                history.push("/login");
            } catch (error) {
               console.log(error); 
            }
         

        }
    }
       
    return (
        <RegisterStyled>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLog">Social Media</h3>
                    <span className="loginDesc">
                        Connect with Friends and the world around you on Social Media.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleSubmit} >
                      <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" type="email" required ref={email} className="loginInput" />
                        <input placeholder="password" type="password" required ref={password} className="loginInput" />
                        <input placeholder="password Again" type="password" required ref={passwordAgain} className="loginInput" />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <button className="loginRegisterButton">Login into Your Account</button>
                    </form>
                </div>
            </div>
        </RegisterStyled >
    )
}


const RegisterStyled = styled(motion.div)`
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
    height: 400px;
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

export default Register;
