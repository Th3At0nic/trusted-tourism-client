import React, { useEffect, useState } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://arcane-ridge-87097.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  }, []);

  return (
    <section id="services" className="mt-5 pt-5 mb-5 p-5">
      <div className="text-center pb-5">
        <p className="text-secondary">OUR SERVICES</p>
        <h1 className="text-primary">Service Menu</h1>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <div className="row w-75">
          {services.map((service) => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>

      <hr />
    </section>
  );
};

export default Services;
