import React, { useEffect, useState } from "react";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetch("https://arcane-ridge-87097.herokuapp.com/appointmentsByDate", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate }),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [selectedDate]);

  const containerStyle = {
    backgroundColor: "#bad4eb",
    height: "100%",
  };

  return (
    <section style={{ height: "100%" }}>
      <div style={containerStyle} className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5">
          <AppointmentsByDate
            key={appointments._id}
            appointments={appointments}
          ></AppointmentsByDate>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
