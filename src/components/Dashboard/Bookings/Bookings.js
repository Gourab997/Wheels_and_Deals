import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Booking from "../Booking/Booking";

const Bookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const url = `https://evening-scrubland-22261.herokuapp.com/myBooking?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const handleDelete = (id) => {
    const yes = window.confirm("Are You Sure.?");
    if (yes === true) {
      const url = `https://evening-scrubland-22261.herokuapp.com//booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            const remaining = bookings.filter((order) => order._id !== id);

            setBookings(remaining);
          }
        });
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
            key={booking._id}
            booking={booking}
            handleDelete={handleDelete}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default Bookings;
