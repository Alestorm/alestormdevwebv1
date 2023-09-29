import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <Paper sx={{backgroundColor:'#202020', padding: 4, marginTop: 2 }}>
          <Typography justifyContent="center" color='white'><a style={{color:'white'}} href="/">Alestormdev</a><p>Copyright © {currentYear}</p></Typography>
        </Paper>
      </footer>
    </>
  );
};

export default Footer;
