import React from "react";
import Button from "@mui/material/Button"
function FunctionClick(){
    function clickHandler(){
        console.log("button clicked");
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </div>
    )
}

export default FunctionClick;