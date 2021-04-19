import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faUserPlus,
  faHome,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/home" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/appointment" className="text-white">
            <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
          </Link>
        </li>
        <li>
          <Link to="/guests" className="text-white">
            <FontAwesomeIcon icon={faUsers} /> <span>Guests</span>
          </Link>
        </li>
        <li>
          <Link to="/addService" className="text-white">
            <FontAwesomeIcon icon={faTasks} /> <span>Add Service</span>
          </Link>
        </li>
        <li>
          <Link to="/addBeautician" className="text-white">
            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Beautician</span>
          </Link>
        </li>
        <li>
          <Link to="/setting" className="text-white">
            <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
