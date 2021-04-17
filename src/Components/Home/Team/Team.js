import React from "react";
import dr1 from "../../../images/dr1.png";
import dr2 from "../../../images/dr2.png";
import dr3 from "../../../images/dr3.png";
import dr4 from "../../../images/dr4.png";
import dr5 from "../../../images/dr5.png";
import dr6 from "../../../images/dr6.png";
import annaimg from "../../../images/anna.png";
import bobimg from "../../../images/bob.png";
import Members from "../Members/Members";

const Team = () => {
  const membersData = [
    {
      name: "Dr. Victoria De Vito",
      role: "Founder - MD, Facts",
      img: dr1,
    },
    {
      name: "Dr. Diane Alexander",
      role: "Designer",
      img: dr2,
    },
    {
      name: "Dr. Victoria De Vito",
      role: "Hair Specialist",
      img: dr3,
    },
    {
      name: "Dr. Diane Alexander",
      role: "Top Hair Specialist",
      img: dr4,
    },
    {
      name: "Dr. Victoria De Vito",
      role: "Receptionist",
      img: dr5,
    },
    {
      name: "Dr. Victoria De Vito",
      role: "Admin Team Specialist",
      img: dr6,
    },
    {
      name: "Bob",
      role: "IT Specialist",
      img: bobimg,
    },
    {
      name: "Anna",
      role: "Designer",
      img: annaimg,
    },
  ];

  return (
    <section className="row text-center">
      <h1 className="mb-5 pb-5">Our Team</h1>
      {membersData.map((member) => (
        <Members member={member}></Members>
      ))}
      <a
        href="https://firstsight.design/cherie/hair/career-archive/"
        target="_blank"
        rel="noreferrer"
      >
        <button type="button" class="btn btn-outline-dark pe-5 ps-5 mb-5">
          JOIN OUR TEAM
        </button>
      </a>{" "}
    </section>
  );
};

export default Team;
