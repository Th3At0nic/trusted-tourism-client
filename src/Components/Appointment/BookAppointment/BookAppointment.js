import React from "react";
import Bookingcard from "../BookingCard/Bookingcard";

const BookAppointment = ({ date }) => {
  const bookingData = [
    {
      id: 1,
      subject: "Hair Care",
      visitingHour: "8:00 AM - 10:00 AM",
      totalSpace: 10,
    },
    {
      id: 2,
      subject: "Facial Treatments",
      visitingHour: "8:00 AM - 9:00 AM",
      totalSpace: 10,
    },
    {
      id: 3,
      subject: "Advanced Facial Treatments",
      visitingHour: "9:00 AM - 10:00 AM",
      totalSpace: 10,
    },
    {
      id: 4,
      subject: "Anti-Aging Treatments",
      visitingHour: "10:00 AM - 11:30 AM",
      totalSpace: 10,
    },
    {
      id: 5,
      subject: "Body Massage",
      visitingHour: "8:00 AM - 9:00 AM",
      totalSpace: 10,
    },
    {
      id: 6,
      subject: "Makeup Services",
      visitingHour: "8:00 AM - 9:00 AM",
      totalSpace: 10,
    },
    {
      id: 7,
      subject: "Waxing",
      visitingHour: "8:00 AM - 9:00 AM",
      totalSpace: 10,
    },
    {
      id: 8,
      subject: "Nail Care",
      visitingHour: "8:00 AM - 9:00 AM",
      totalSpace: 10,
    },
  ];

  return (
    <section>
      <h2 className="text-center text-info">
        Available Appointments on {date.toDateString()}
      </h2>
      <div className="row justify-content-center">
        {bookingData.map((booking) => (
          <Bookingcard
            key={booking.id}
            date={date}
            booking={booking}
          ></Bookingcard>
        ))}
      </div>
    </section>
  );
};

export default BookAppointment;
