import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Checkout from "./Components/Checkout/Checkout";
import AddBeautician from "./Components/Dashboard/AddBeautician/AddBeautician";
import AddService from "./Components/Dashboard/AddService/AddService";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Orders from "./Components/Dashboard/Orders/Orders";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NoMatch from "./Components/NoMatch/NoMatch";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router className="App">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/orderList">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addBeautician">
            <AddBeautician></AddBeautician>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/noMatch">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
