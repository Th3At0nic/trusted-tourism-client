import React, { useEffect, useState } from "react";
import Beautician from "../Beautician/Beautician";
const Beauticians = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5003/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  console.log(members);
  return (
    <section className="doctors">
      <div className="container">
        <h5 className="text-center  text-primary mb-5">Our Members</h5>
        <div className="row">
          {members.map((member) => (
            <Beautician member={member}></Beautician>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beauticians;
