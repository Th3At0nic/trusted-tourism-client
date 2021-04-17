import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const BarberInfo = () => {
  const infosData = [
    {
      title: "Hours",
      description: `Mon to Fri: 7:30 am — 1:00 am
      Sat: 9:00 am — 1:00 am
      Sun: 9:00 am — 11:30 pm`,
      icon: faClock,
      background: "primary",
    },
    {
      title: "Location",
      description: "85 Royal Mint Street,London, E1 8LG, UK",
      icon: faMapMarkerAlt,
      background: "dark",
    },
    {
      title: "Contact",
      description: `T: 070 9485 7568
      info@beautysalon.com`,
      icon: faPhone,
      background: "primary",
    },
  ];
  return (
    <section className="d-flex justify-content-center">
      <div className="row w-75">
        {infosData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BarberInfo;
