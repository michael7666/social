import Home from "./pages/Home/Home";
import GlobalStyle from "./components/GlobalStyled"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Profile from "./pages/profile/Profile";
import {Redirect, Route, Switch} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import dotenv from "dotenv";

dotenv.config();

 function App() {
     const {user} = useContext(AuthContext);
    return (
        <div>
            <GlobalStyle/>
            <Switch>
              <Route path="/" exact>
             { user ?  <Home/> : <Register/>}
              </Route>
              <Route path="/login">
              {user ? <Redirect to="/"/> : <Login/>}
              </Route>
              <Route path="/register"> 
              {user ? <Redirect to="/"/> : <Register/>}
              <Register/>
              </Route>
              <Route path="/profile/:username">
              <Profile/>
              </Route>
            </Switch>
        </div>
    )
}

export default App;
