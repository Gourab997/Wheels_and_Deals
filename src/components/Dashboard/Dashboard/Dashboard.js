import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import headerImg from "../../../images/header-removebg-preview.png";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useAuth from "../../../hooks/useAuth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Button } from "@mui/material";

import Bookings from "../Bookings/Bookings";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddNewCar from "../../Explore/AddNewCar/AddNewCar";
import ManageAllCars from "../ManageAllCars/ManageAllCars";
import ManageAllBookings from "../ManageAllBookings/ManageAllBookings";
import DashboardHome from "../DashboardHome/DashboardHome";
const drawerWidth = 240;

function Dashboard(props) {
  const { user, logOut, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div sx={{}}>
      <Link to='/'>
        <img
          style={{ width: "120px", height: "90px" }}
          src={headerImg}
          alt=''
        />
      </Link>
      <Toolbar />
      <img
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          borderStyle: "solid",
          borderColor: "#5AB7D4",
          borderWidth: " 5px",
        }}
        src={user?.photoURL}
        alt=''
      />
      <h6 className='my-5' style={{ color: "#00BAE2" }}>
        Welcome , <span style={{ color: "#009D77" }}>{user?.displayName} </span>
      </h6>
      <Divider />
      {!admin ? (
        <Link
          style={{ textDecoration: "none", color: "blue" }}
          to={`${url}/myBookings`}
        >
          <Button style={{ color: "#7E0000" }}>My Order</Button>
        </Link>
      ) : (
        <Link
          style={{ textDecoration: "none", color: "blue" }}
          to={`${url}/makeAdmin`}
        >
          <Button style={{ color: "#7E0000" }}>Make Admin</Button>
        </Link>
      )}
      <Divider />
      {!admin ? (
        <Link
          style={{ textDecoration: "none", color: "blue" }}
          to={`${url}/payment`}
        >
          <Button style={{ color: "#7E0000" }}>Payment</Button>
        </Link>
      ) : (
        <Link
          style={{ textDecoration: "none", color: "blue" }}
          to={`${url}/manageAllCars`}
        >
          <Button style={{ color: "#7E0000" }}>Manage all Cars</Button>
        </Link>
      )}
      <Divider />
      {!admin ? (
        <Link
          style={{ textDecoration: "none", color: "blue" }}
          to={`${url}/review`}
        >
          <Button style={{ color: "#7E0000" }}>Review</Button>
        </Link>
      ) : (
        <Link
          style={{ textDecoration: "none", color: "blue" }}
          to={`${url}/manageAllBooking`}
        >
          <Button style={{ color: "#7E0000" }}>Manage all orders</Button>
        </Link>
      )}
      <Divider />
      {admin && (
        <Link
          style={{ textDecoration: "none", color: "blue" }}
          to={`${url}/addNewCar`}
        >
          <Button style={{ color: "#7E0000" }}>Add a new Cars</Button>
        </Link>
      )}
      <Divider />

      <Button onClick={logOut} color='error'>
        Logout
      </Button>

      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "red",
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, backgroundColor: "red" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{}} variant='h6' noWrap component='div'>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label='mailbox folders'
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={`${path}`}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/myBookings`}>
            <Bookings></Bookings>
          </Route>

          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllCars`}>
            <ManageAllCars></ManageAllCars>
          </AdminRoute>
          <AdminRoute path={`${path}/addNewCar`}>
            <AddNewCar></AddNewCar>
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllBooking`}>
            <ManageAllBookings></ManageAllBookings>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
