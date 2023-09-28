import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from '../assets/logo.jpg';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar position="static" sx={{backgroundColor:"#202020",color:'white'}}>
        <Toolbar>
            <Box component='img' src={logo} sx={{height:40,width:30,marginRight:1}}></Box>
            <Typography variant="h6" component='div' sx={{flexGrow:1}}><Link className="navlink" to='/' >Alestormdev</Link></Typography>
            <Stack direction='row' spacing={2}>
                <Link className="navlink" to='android'><Button color="inherit">Android</Button></Link>
                <Link className="navlink" to='jetpack'><Button color="inherit">Jetpack</Button></Link>
                <Link className="navlink" to='kotlin'><Button color="inherit">Kotlin</Button></Link>
                <Link className="navlink" to='generator'><Button color="inherit">Android componentes</Button></Link>
                <Link className="navlink" to='about'><Button color="inherit">Acerca</Button></Link>
            </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
