import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import deleteImg from "../../../images/product.svg";
import { Box } from "@mui/system";
const ManageAllCars = () => {
  const [cars, setCars] = useState([]);

  const handleDelete = (id) => {
    const yes = window.confirm("Are You Sure.?");
    if (yes === true) {
      const url = `https://evening-scrubland-22261.herokuapp.com/cars/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            const remaining = cars.filter((order) => order._id !== id);

            setCars(remaining);
          }
        });
    }
  };

  useEffect(() => {
    fetch("https://evening-scrubland-22261.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <TableContainer>
        <TableContainer aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell> Car Name </TableCell>
              <TableCell align='right'>Car Price</TableCell>
              <TableCell align='right'>Image</TableCell>
              <TableCell align='right'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                handleDelete={handleDelete}
              >
                <TableCell component='th' scope='row'>
                  {row.carName}
                </TableCell>
                <TableCell align='right'>{row.carPrice}</TableCell>
                <TableCell align='right'>
                  {" "}
                  <img
                    src={row.image}
                    alt=''
                    style={{ width: "100px", height: "50px" }}
                  />
                </TableCell>
                <TableCell align='right'>
                  {" "}
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

export default ManageAllCars;
