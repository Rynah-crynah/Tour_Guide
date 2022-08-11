import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, ToolBar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons';

const Header = () => {
    return (
       <AppBar position="static">
        <ToolBar className = {classes.toolBar}>
            <Typography variant="h5" className={classes.title}>
                 Travel Advisor
            </Typography>
            <Box display="flex">
            <Typography variant="h6" className={classes.title}>
                Explore New Places
            </Typography>
            <Autocomplete>
                <div className="{classes.search}">
                    <div className="{classes.searchIcon}">
                        <SearchIcon/>        
                    </div>
                    <Inpit Base/>

                </div>
            </Autocomplete>
            </Box>
        </ToolBar>
       </AppBar>
    );

}

export default Header;