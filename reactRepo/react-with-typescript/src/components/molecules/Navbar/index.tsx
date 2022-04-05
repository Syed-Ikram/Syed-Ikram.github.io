import React from "react";
import { AppBar, Toolbar,Popover,Paper, Link} from "@mui/material";
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
                <Link underline="none" href="/explore"><img src="http://127.0.0.1:8887/Blinklist.png" alt="blinklist"/></Link>
                <Link underline="none" href="/explore" sx={{"marginLeft":2,"marginRight":2}}><Search /></Link>
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
                <Link underline="none" href="/" sx={{"marginLeft":2,"marginRight":2}}>My Library</Link>
            </Toolbar>
        </AppBar>
        
    )
}
export default NavBar;