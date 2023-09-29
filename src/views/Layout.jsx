import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Container, CssBaseline, Divider, Paper } from "@mui/material";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <Container maxWidth="xl">
        <Paper sx={{ padding: 4,marginTop:2 }}>
          <Outlet />
        </Paper>
      </Container>
      <br/>
      <br/>
      <Divider/>
      <Footer/>
    </>
  );
};

export default Layout;
