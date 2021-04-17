import React from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const Bookingcard = ({ booking, date }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-3 text-center">
      <div className="border border border-1 shadow p-3 mb-5 bg-body rounded  m-3">
        <h4>{booking.subject}</h4>
        <p className="text-secondary">{booking.visitingHour}</p>
        <p className="text-secondary">Available Space: {booking.totalSpace}</p>
        <button onClick={openModal} className="btn btn-info">
          BOOK NOW
        </button>
        <AppointmentForm
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          appointmentOn={booking.subject}
          date={date}
        ></AppointmentForm>
      </div>
    </div>
  );
};

export default Bookingcard;
