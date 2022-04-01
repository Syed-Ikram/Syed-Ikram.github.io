import React from "react";
import {Button} from "@mui/material"
 
function MyButton(props){
    const {variant , children} =props
    return(
        <Button color={variant} variant="contained">{children}</Button>
    )
}
export default MyButton;