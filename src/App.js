import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Header from "./components/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddNewCar from "./components/Explore/AddNewCar/AddNewCar";
import AllCars from "./components/Explore/AllCars/AllCars";
import Login from "./components/Login/Login/Login";
import Registration from "./components/Login/Registration/Registration";
import AuthProvider from "./Context/AuthProdiver/AuthProvider";
import Purchase from "./components/Purchase/Purchase";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Bookings from "./components/Dashboard/Bookings/Bookings";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/addNewCar'>
              <AddNewCar></AddNewCar>
            </Route>
            <Route path='/explore'>
              <AllCars></AllCars>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Registration></Registration>
            </Route>
            <PrivateRoute path='/purchase/:purchaseId'>
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path='/myBookings'>
              <Bookings></Bookings>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
