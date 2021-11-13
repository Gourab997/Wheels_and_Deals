import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShowReview from "../ShowReview/ShowReview";

const ShowReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://evening-scrubland-22261.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <h1 style={{ color: "red" }} className='mt-5'>
        FeedBack
      </h1>
      <hr />
      <Grid container className='mt-2' spacing={5}>
        {reviews.map((review) => (
          <ShowReview key={review._id} review={review}></ShowReview>
        ))}
      </Grid>
    </Container>
  );
};

export default ShowReviews;
