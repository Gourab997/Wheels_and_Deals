import TextField from "@mui/material/TextField";
import React from "react";
import { Button, Form } from "react-bootstrap";
import car from "../../../images/car.svg";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddNewCar = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://evening-scrubland-22261.herokuapp.com/addNewCar", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Car details Created");
          reset();
        }
      });
  };

  return (
    <div className=' my-5 container d-flex justify-content-between align-items-center'>
      <img className=' w-50' src={car} alt='' />
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className='my-3 ' controlId='formBasicName'>
            <TextField
              {...register("carName")}
              className='w-100'
              id='outlined-basic'
              label='Car Name'
              variant='outlined'
            />
          </Form.Group>

          <Form.Group className='my-3' controlId='formBasicPrice'>
            <TextField
              {...register("carPrice")}
              className='w-100'
              id='outlined-basic'
              label='Car Price'
              type='number'
              variant='outlined'
            />
          </Form.Group>
          <Form.Group className='my-3' controlId='formBasicImage'>
            <TextField
              {...register("image")}
              className='w-100'
              id='outlined-basic'
              label='Image Url'
              type='url'
              variant='outlined'
            />
          </Form.Group>
          <Form.Group className='my-3' controlId='formBasicDescription'>
            <TextField
              {...register("description")}
              className='w-100'
              multiline
              rows={4}
              id='outlined-basic'
              label='Description'
              type='url'
              variant='outlined'
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddNewCar;
