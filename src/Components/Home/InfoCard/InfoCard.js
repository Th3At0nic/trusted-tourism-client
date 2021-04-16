import React from "react";
import "./InfoCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4">
      <div
        className={`d-flex align-items-center justify-content-center info-container info-${info.background}`}
      >
        <div>
          <FontAwesomeIcon className="info-icon me-5" icon={info.icon} />
        </div>
        <div>
          <h3>{info.title}</h3>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
