import React, { useState } from "react";
import { AppBar, Typography,Button,Grid, Toolbar,Menu,Tab,Tabs,Box,Paper,Container} from "@mui/material";
import {Search, ArrowDropDown} from "@mui/icons-material";

function NavBar(){
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [openMenu,setOpenMenu]=useState(null);
    const handleMenu = (event)=>{
        setOpenMenu(event.currentTarget);
    }
    const closeMenu=()=>{
        setOpenMenu(false);
    }
    return(            
        <AppBar position="relative" sx={{ bgcolor: "white",color:"#03314B","marginLeft":19,"display":"flex"}} elevation={0}>
            <Toolbar>
                <Button variant="primary" size="small"><img src="http://127.0.0.1:8887/Blinklist.png" alt="blinklist"/></Button>
                <Button variant="primary" size="small"><Search /></Button>
                <Button variant="primary" size="small" onClick={handleMenu}>Explore<ArrowDropDown /></Button>
                <Menu anchorEl={openMenu} open={openMenu} onClose={closeMenu} sx={{width:1000}}>
                    <Paper elevation={0} sx={{width:1500,bgcolor:'#F1F6F4'}} >
                        
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                        >
                            <Tab value="one" label="Explore by category" />
                            <Tab value="two" label="See recently added titles" />
                            <Tab value="three" label="See popular titles" />
                        </Tabs>
                
                    </Paper>
                </Menu>
                <Button variant="primary" size="small">My Library</Button>
            </Toolbar>
        </AppBar>
        
    )
}
export default NavBar;