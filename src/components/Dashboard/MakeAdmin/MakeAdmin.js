import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://evening-scrubland-22261.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          alert("done");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Box
        component='form'
        onSubmit={handleAdminSubmit}
        sx={{
          "& > :not(style)": { m: 1, width: "50%" },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          id='standard-basic'
          onBlur={handleOnBlur}
          label='Email'
          variant='standard'
        />
        <Button type='submit' variant='contained' color='error'>
          Make Admin
        </Button>
      </Box>
    </div>
  );
};

export default MakeAdmin;
