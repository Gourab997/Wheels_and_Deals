import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import oil from "../../../images/car.png";
import wheel from "../../../images/tyre.png";
import service from "../../../images/car-service.png";
const Sevices = () => {
  return (
    <Container className='my-5'>
      <h1 style={{ color: "red" }}>Our Services</h1>
      <hr />
      <Grid className='mt-3' container spacing={4}>
        <Grid xs={12} md={3}>
          <img
            className='w-75'
            sx={{ width: "200px", height: "150px" }}
            src={oil}
            alt=''
          />
          <Typography>Oil Changing</Typography>
        </Grid>
        <Grid xs={12} md={4}>
          <img
            className='w-50'
            sx={{ width: "200px", height: "150px" }}
            src={wheel}
            alt=''
          />
          <Typography>Wheel Changing</Typography>
        </Grid>
        <Grid xs={12} md={4}>
          <img className='w-50' src={service} alt='' />
          <Typography className='pt-2'>Car Cleaning</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Sevices;
