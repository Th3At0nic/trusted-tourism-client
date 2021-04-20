import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Components/Checkout/Checkout";
import AddMember from "./Components/Dashboard/AddMember/AddMember";
import AddService from "./Components/Dashboard/AddService/AddService";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Orders from "./Components/Dashboard/Orders/Orders";
import AddReview from "./Components/Dashboard/AddReview/AddReview";
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
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
          <PrivateRoute exact path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/orderList">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addMember">
            <AddMember></AddMember>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
//// sorry to say first i started my project as a beauty parlour website,
//but then for some major issue at the last day i changed it to tourism website, so some name might be odd.
//so please consider my problem
