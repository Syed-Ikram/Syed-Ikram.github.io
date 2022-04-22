import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = ()=>{
    const {logout ,isAuthenicated}=useAuth0();
    return(
        isAuthenicated && (
            <button onClick={()=> logout({ returnTo: window.location.origin })}>
                LogOut
            </button>
        )

    )
}
export default LogoutButton;