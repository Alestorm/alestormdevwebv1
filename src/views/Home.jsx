import React from "react";
import { Icon, Typography } from "@mui/material";
import { MainPublish } from "../components/MainPublish";
import landscape from "../assets/landscape.jpg";

const Home = () => {
  console.log(landscape);
  return (
    <>
      <Typography variant="h3">Home</Typography>
      <MainPublish
        title="Main publish"
        text="Android is developed in kotlin"
        imgsrc={landscape}
      ></MainPublish>
    </>
  );
};

export default Home;
