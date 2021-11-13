import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const ShowReview = ({ review }) => {
  const { userName, date, userImage, description, rating } = review;
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 345, mt: 5 }}>
        <CardHeader title={userName} subheader={date} />
        <CardMedia
          component='img'
          height='194'
          image={userImage}
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Rating name='read-only' value={rating} readOnly />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ShowReview;
