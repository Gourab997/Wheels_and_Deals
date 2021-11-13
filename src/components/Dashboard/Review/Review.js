import {
  Button,
  Container,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import review from "../../../images/review.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Review = () => {
  const [value, setValue] = React.useState(2);
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    data.userEmail = user.email;
    data.rating = value;
    console.log(data);
    axios.post("https://evening-scrubland-22261.herokuapp.com/review", data).then((res) => {
      if (res.data.insertedId) {
        alert("Review Created Successfully");
        history.push("/");
        reset();
      }
    });
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Box
        component='form'
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id='standard-basic'
          label='Name'
          name='userName'
          defaultValue={user?.displayName}
          variant='standard'
          {...register("userName")}
        />
        <TextField
          id='standard-basic'
          label='email'
          name='userEmail'
          {...register("userEmail")}
          defaultValue={user?.email}
          disabled
          variant='standard'
        />
        <input
          type='hidden'
          name='userImage'
          defaultValue={user?.photoURL}
          {...register("userImage")}
        />
        <input
          type='hidden'
          name='date'
          defaultValue={new Date().toLocaleString()}
          {...register("date")}
        />
        <TextField
          id='standard-multiline-static'
          label='Describe'
          name='description'
          multiline
          rows={4}
          {...register("description")}
          variant='standard'
        />
        <Typography sx={{ textAlign: "left" }}>Rate Us</Typography>
        <Rating
          name='simple-controlled'
          value={value}
          {...register("rating")}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        ></Rating>

        <Button type='submit' variant='contained' color='error'>
          Submit
        </Button>
      </Box>
      <Box>
        <img className='w-50 mt-5' src={review} alt='' />
      </Box>
    </Container>
  );
};

export default Review;
