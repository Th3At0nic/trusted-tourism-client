import React from "react";

const Members = ({ member }) => {
  return (
    <div className="text-center col-md-3 pb-5">
      <img style={{ height: "400px" }} src={member.img} alt="" />
      <h4>{member.name}</h4>
      <small>{member.role}</small>
    </div>
  );
};

export default Members;
