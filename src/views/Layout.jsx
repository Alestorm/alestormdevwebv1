import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Container, CssBaseline, Paper } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <Container maxWidth="xl">
        <Paper sx={{ padding: 2,marginTop:2 }}>
          <Outlet />
        </Paper>
      </Container>
    </>
  );
};

export default Layout;
