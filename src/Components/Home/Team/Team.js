import React, { useEffect, useState } from "react";
import Member from "../Member/Member";
const Team = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5003/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  console.log(members);
  return (
    <section className="doctors text-center mb-5 pb-5">
      <div className="container">
        <h1 className="text-primary">Our Members</h1>
        <p className=" text-secondary mb-5">"are always ready to guide you"</p>
        <div className="row">
          {members.map((member) => (
            <Member member={member}></Member>
          ))}
        </div>
        <button type="button" class="btn btn-outline-dark pe-5 ps-5">
          CONTACT NOW
        </button>
      </div>
    </section>
  );
};

export default Team;
