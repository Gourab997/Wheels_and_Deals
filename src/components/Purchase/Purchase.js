import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Purchase.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "@mui/material";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
const Purchase = () => {
  const { user } = useAuth();
  const { purchaseId } = useParams();
  const [purchaseDetails, setPurchaseDetails] = useState([]);
  const [singlePurchase, setSinglePurchase] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const history = useHistory();

  useEffect(() => {
    fetch("https://evening-scrubland-22261.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setPurchaseDetails(data));
  }, []);
  useEffect(() => {
    const found = purchaseDetails.find((detail) => detail._id === purchaseId);
    setSinglePurchase(found);
  }, [purchaseDetails]);

  const onSubmit = (data) => {
    data.carName = singlePurchase?.carName;
    data.carPrice = singlePurchase?.carPrice;
    data.image = singlePurchase?.image;
    console.log(data);

    axios
      .post("https://evening-scrubland-22261.herokuapp.com/booking", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Booking Created Successfully");
          history.push("/dashboard");
          reset();
        }
      });
  };

  return (
    <div>
      <Header></Header>
      <div class='card mb-3'>
        <div class='row no-gutters'>
          <div class='col-md-4'>
            <img src={singlePurchase?.image} class='card-img' alt='...' />
          </div>
          <div class='col-md-8'>
            <div class='card-body'>
              <h5 class='card-title'>{singlePurchase?.carName}</h5>
              <p class='card-text'>{singlePurchase?.description}</p>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group
                  as={Row}
                  className='mb-3'
                  controlId='formPlaintextName'
                >
                  <Form.Label column sm='2'>
                    Name :
                  </Form.Label>
                  <Col sm='10'>
                    <Form.Control
                      {...register("name")}
                      plaintext
                      readOnly
                      defaultValue={user?.displayName}
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className='mb-3'
                  controlId='formPlaintextEmail'
                >
                  <Form.Label column sm='2'>
                    Email :
                  </Form.Label>
                  <Col sm='10'>
                    <Form.Control
                      {...register("email")}
                      plaintext
                      readOnly
                      defaultValue={user?.email}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className='mb-3'
                  controlId='formPlaintextAddress'
                >
                  <Form.Label column sm='2'>
                    Address :
                  </Form.Label>
                  <Col sm='10'>
                    <Form.Control
                      {...register("address")}
                      type='text'
                      placeholder='Address'
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className='mb-3'
                  controlId='formPlaintextAddress'
                >
                  <Form.Label column sm='2'>
                    Phone :
                  </Form.Label>
                  <Col sm='10'>
                    <Form.Control
                      {...register("Phone")}
                      type='phone'
                      placeholder='Phone'
                    />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className='mb-3'
                  controlId='formPlaintextAddress'
                >
                  <Form.Label column sm='2'>
                    Price :
                  </Form.Label>
                  <Col sm='10'>
                    <Form.Control
                      {...register("Price")}
                      defaultValue={singlePurchase?.carPrice}
                      placeholder='Price'
                      readOnly
                    />
                  </Col>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEnd'>
                  <Form.Control
                    {...register("status")}
                    type='hidden'
                    defaultValue='pending'
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEnd'>
                  <Form.Control
                    {...register("image")}
                    type='hidden'
                    defaultValue={singlePurchase?.image}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEnd'>
                  <Form.Control
                    {...register("carName")}
                    type='hidden'
                    defaultValue={singlePurchase?.carName}
                  />
                </Form.Group>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Purchase;
