import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import AllCar from "../AllCar/AllCar";

const AllCars = () => {
  const [allCars, setAllCars] = useState([]);
  useEffect(() => {
    fetch("https://evening-scrubland-22261.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setAllCars(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <Container>
        <Grid container spacing={2}>
          {allCars.map((allCar) => (
            <AllCar key={allCar._id} allCar={allCar}></AllCar>
          ))}
        </Grid>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default AllCars;
