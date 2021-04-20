import React from "react";
import AppointmentShortList from "../AppointmentShortList/AppointmentShortList";

const AppointmentsByDate = ({ appointments }) => {
  return (
    <div>
      <h2 className="text-brand text-center">Bookings</h2>
      {appointments.length ? (
        <AppointmentShortList
          key={appointments._id}
          appointments={appointments}
        ></AppointmentShortList>
      ) : (
        <div className="p-5">
          <h4 className="lead text-center">No Bookings for this Date</h4>
        </div>
      )}
    </div>
  );
};

export default AppointmentsByDate;
