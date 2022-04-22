import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = ()=>{
    const {user ,isAuthenicated}=useAuth0();
    return(
        isAuthenicated && (
            <div>
                {JSON.stringify(user,null,2)}
            </div>
        )

    )
}
export default Profile;