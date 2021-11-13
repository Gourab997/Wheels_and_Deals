import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./AllCar.css";

const AllCar = ({ allCar }) => {
  const { _id, carName, carPrice, image, description } = allCar;
  return (
    <Grid item xs={12} md={4}>
      <div>
        <div class='card-sl'>
          <div class='card-image'>
            <img src={image} alt='' />
          </div>

          <div class='card-heading'>{carName}</div>
          <div class='card-text'>{description}</div>
          <div class='card-text'>$ {carPrice}</div>
          <Link
            to={`/purchase/${_id}`}
            style={{ textDecoration: "none" }}
            className='card-button'
          >
            {" "}
            Purchase
          </Link>
        </div>
      </div>
    </Grid>
  );
};

export default AllCar;
