import React from "react";
import "./AppointmentHeader.css";
import members from "../../../images/3members.jpg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main
      style={{ height: "1000px" }}
      className="row d-flex align-items-center mb-5 headerBG"
    >
      <div className="col-md-4 offset-md-1">
        <h1>Appointment</h1>
        <br />
        <Calendar onChange={handleDateChange} value={new Date()} />
      </div>
      <div className="col-md-6 ">
        <img
          style={{ height: "600px" }}
          src={members}
          alt=""
          className="img-fluid"
        />
      </div>
    </main>
  );
};

export default AppointmentHeader;
