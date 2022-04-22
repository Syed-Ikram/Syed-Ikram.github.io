import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ()=>{
    const {loginWithRedirect ,isAuthenicated}=useAuth0();
    return(
        !isAuthenicated && (
            <button onClick={()=> loginWithRedirect()}>
                LogIn

            </button>
        )

    )
}

export default LoginButton;