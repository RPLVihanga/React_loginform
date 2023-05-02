import React, { useState } from "react";
import "./loginform.css"

const LoginForm = () => {
    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    return(
    <div className="cover">
            <h1>LOGIN</h1>
           <input type="text" placeholder="username" />
           <input type="Password" placeholder="Password" />

           <div className="login-btn" onClick={popup} >Login</div>

           <p className="text">OR LOGIN USING</p>

        <div className="alt-login">
            <div className="facebook"></div>
            <div className="google"></div>
        </div> 

        <div className={popupStyle}>
            <h3>Login Failed</h3>
            <p>Usere or password incorrect</p>
        </div>

    </div>
    )
}

export default LoginForm