import React from "react";
import "./loginform.css"

const LoginForm = () => {
    return(
        <div>
            <h1>Login</h1>
           <input type="text" placeholder="username" />
           <input type="Password" placeholder="Password" />
        </div>
    )
}

export default LoginForm