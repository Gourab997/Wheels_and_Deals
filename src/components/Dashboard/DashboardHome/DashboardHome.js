import { Typography } from "@mui/material";
import React from "react";
import dashBoard from "../../../images/dashboard.svg";
const DashboardHome = () => {
  return (
    <div>
      <img src={dashBoard} alt='' />
      <Typography sx={{ color: "red" }} variant='h3'>
        Welcome To DashBoard
      </Typography>
    </div>
  );
};

export default DashboardHome;
