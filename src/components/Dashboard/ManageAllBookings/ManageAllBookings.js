import {
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import deleteImg from "../../../images/product.svg";
import { LoadingButton } from "@mui/lab";

import SendIcon from "@mui/icons-material/Send";

const ManageAllBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    fetch("https://evening-scrubland-22261.herokuapp.com/allBooking")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, []);
  const handleDelete = (id) => {
    const yes = window.confirm("Are You Sure.?");
    if (yes === true) {
      const url = `https://evening-scrubland-22261.herokuapp.com/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            const remaining = allBookings.filter((order) => order._id !== id);

            setAllBookings(remaining);
          }
        });
    }
  };

  const handleUpdatedStatus = (id, e) => {
    const url = `https://evening-scrubland-22261.herokuapp.com/booking/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("updated successfully");

          window.location.reload();
        }
      });
  };
  return (
    <Box sx={{ display: "flex" }}>
      <TableContainer>
        <TableContainer aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name </TableCell>
              <TableCell align='right'>Phone</TableCell>
              <TableCell align='right'>Address</TableCell>
              <TableCell align='right'>carName</TableCell>
              <TableCell align='right'>carPrice</TableCell>
              <TableCell align='right'>status</TableCell>
              <TableCell align='right'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allBookings.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                handleDelete={handleUpdatedStatus}
              >
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.Phone}</TableCell>
                <TableCell align='right'>{row.address}</TableCell>
                <TableCell align='right'>{row.carName}</TableCell>
                <TableCell align='right'>{row.carPrice}</TableCell>
                <TableCell align='right'>{row.status}</TableCell>

                <TableCell align='right'>
                  {row.status === "pending" && (
                    <LoadingButton
                      onClick={() => handleUpdatedStatus(row._id)}
                      variant='contained'
                      color='secondary'
                    >
                      Shipped
                    </LoadingButton>
                  )}
                  <Button onClick={() => handleDelete(row._id)} color='error'>
                    <DeleteIcon />
                  </Button>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </TableContainer>
      <img className='w-50' src={deleteImg} alt='' />
    </Box>
  );
};

export default ManageAllBookings;
