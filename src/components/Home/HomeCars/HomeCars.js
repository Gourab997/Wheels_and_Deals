import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import HomeCar from "../HomeCar/HomeCar";
import "./HomeCars.css";

const HomeCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://evening-scrubland-22261.herokuapp.com/homeCars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <Container>
      <h1 className='mt-5' style={{ color:"red" }}>
        Showing Latest Cars
      </h1>
      <hr />
      <Grid container className='mt-5' spacing={2}>
        {cars.map((car) => (
          <HomeCar key={car._id} car={car}></HomeCar>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeCars;
