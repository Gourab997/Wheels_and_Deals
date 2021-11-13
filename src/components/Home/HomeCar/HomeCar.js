import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const HomeCar = ({ car }) => {
  const { _id, carName, carPrice, image, description } = car;
  return (
    <Grid item xs={12} md={4}>
      <div>
        <div className='card-sl'>
          <div className='card-image'>
            <img src={image} alt='' />
          </div>

          <div className='card-heading'>{carName}</div>
          <div className='card-text'>$ {carPrice}</div>
          <div className='card-text'>{description.split(0, 100)}</div>

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

export default HomeCar;
