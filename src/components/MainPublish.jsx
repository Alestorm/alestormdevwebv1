import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

export const MainPublish = ({ title,text, imgsrc }) => {
  console.log(title);
  console.log(imgsrc);
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Stack direction="row" >
            <img src={imgsrc} alt={imgsrc} width={200} />
            <Typography variant='p' ml={1}>{text}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
