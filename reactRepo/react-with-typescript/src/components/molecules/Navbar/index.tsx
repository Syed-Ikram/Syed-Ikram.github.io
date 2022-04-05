import React from "react";
import { AppBar, Toolbar,Popover,Paper,Typography, Link} from "@mui/material";
import {Search, KeyboardArrowDown} from "@mui/icons-material";
import ButtonComponent from "../../atoms/Button";
import ExploreTabs from "../ExploreTabs";

const NavBar =()=>{
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    return(            
        <AppBar position="relative" sx={{ bgcolor: "white",color:"black","marginLeft":19}} elevation={0}>
            <Toolbar>
                <ButtonComponent variant="text" ><img src="http://127.0.0.1:8887/Blinklist.png" alt="blinklist"/></ButtonComponent>
                <ButtonComponent variant="text" ><Search /></ButtonComponent>
                <ButtonComponent variant="text" size="large" onClick={handleClick}>Explore<KeyboardArrowDown /></ButtonComponent>
                        <Popover
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        >
                        <Paper sx={{"width":1800,'opacity':1,bgcolor:'#F1F6F4'}}>
                            <ExploreTabs />
                        </Paper>                        
                    </Popover>
                <ButtonComponent variant="text" size="large">My Library</ButtonComponent>
            </Toolbar>
        </AppBar>
        
    )
}
export default NavBar;