import React from "react";
import { AppBar, Toolbar} from "@mui/material";
import {Search, ArrowDropDown} from "@mui/icons-material";
import ButtonComponent from "../../atoms/Button";

const NavBar =()=>{
    return(            
        <AppBar position="relative" sx={{ bgcolor: "white",color:"#03314B","marginLeft":19}} elevation={0}>
            <Toolbar>
                <ButtonComponent variant="text" size="small"><img src="http://127.0.0.1:8887/Blinklist.png" alt="blinklist"/></ButtonComponent>
                <ButtonComponent variant="text" size="small"><Search /></ButtonComponent>
                <ButtonComponent variant="text" size="small">Explore<ArrowDropDown /></ButtonComponent>
                <ButtonComponent variant="text" size="small">My Library</ButtonComponent>
            </Toolbar>
        </AppBar>
        
    )
}
export default NavBar;