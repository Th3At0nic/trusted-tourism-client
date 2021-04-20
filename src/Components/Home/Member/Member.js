import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../../images/passenger.png";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const Member = ({ member }) => {
  return (
    <div className="col-md-3 text-center">
      {member.image ? (
        <img
          style={{ height: "300px" }}
          src={`data:image/png;base64, ${member.image.img}`}
          alt=""
        />
      ) : (
        <img
          style={{ height: "300px" }}
          className="img-fluid mb-3"
          src={img}
          alt=""
        />
      )}
      <h4>{member.name}</h4>
      <p>
        {" "}
        <FontAwesomeIcon className="text-primary" icon={faEnvelope} />{" "}
        {member.email}
      </p>
    </div>
  );
};

export default Member;
