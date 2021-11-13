import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Link, NavLink } from "react-router-dom";
import headerImg from "../../../images/header-removebg-preview.png";
import useAuth from "../../../hooks/useAuth";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#DD3D53" }} position='static'>
        <Toolbar>
          <NavLink
            to='/explore'
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color='inherit'>Explore</Button>
          </NavLink>

          <Typography
            variant='link'
            to='/'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            <Link to='/'>
              <img
                style={{ width: "170px", height: "120px" }}
                src={headerImg}
                alt=''
              />
            </Link>
            {user.email && (
              <NavLink
                to='/dashboard'
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color='inherit'>Dashboard</Button>
              </NavLink>
            )}
          </Typography>
          {user.email ? (
            <Button onClick={logOut} sx={{ ml: 2 }} color='inherit'>
              <span className='pe-2'>{user?.displayName} </span>
              <i class='fas fa-sign-out-alt'></i>
            </Button>
          ) : (
            <Link
              to='/login'
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color='inherit'>Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
