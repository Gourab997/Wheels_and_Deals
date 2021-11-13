import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { Button, Grid } from "@mui/material";
import { Badge } from "react-bootstrap";

const Booking = (props) => {
  const { _id, carName, carPrice, image, status, Phone, name } = props.booking;
  return (
    <Grid xs={4}>
      <Card className='mt-4' sx={{ maxWidth: 345 }}>
        <CardHeader title={carName} />

        {status === "pending" ? (
          <Badge pill bg='danger'>
            {status}
          </Badge>
        ) : (
          <Badge pill bg='success'>
            {status}
          </Badge>
        )}
        <CardMedia component='img' height='194' image={image} alt='' />
        <CardContent>
          <Typography variant='h6' color='text.secondary'>
            $ {carPrice}
          </Typography>
          <h6>Booking Details:</h6>
          <Typography variant='h6' color='text.secondary'>
            {name}
          </Typography>
          <Typography variant='h6' color='text.secondary'>
            {Phone}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <Button
              onClick={() => props.handleDelete(_id)}
              variant='contained'
              color='error'
            >
              DELETE
            </Button>
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Booking;
