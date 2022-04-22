import React from "react";
import {Avatar,AvatarProps} from "@mui/material"
 
interface Props extends AvatarProps{}

const AvatarComponent= (props:Props)=> {
 return(
    <Avatar
    >
        {props.children}
    </Avatar>)
}


  
export default AvatarComponent;