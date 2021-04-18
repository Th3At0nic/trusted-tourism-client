import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "50%",
    width: "50%",
    borderRadius: "20px",
  },
};
Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();
    console.log(data);

    fetch("http://localhost:5003/addAppointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
          alert("Appointment booked successfully");
        }
      });
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-info text-center">{appointmentOn}</h2>
        <p className="text-secondary text-center">On {date.toDateString()}</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control m-2"
            {...register("name")}
            placeholder="Your name"
          />
          <input
            type="number"
            className="form-control m-2"
            {...register("phoneNumber", { required: true })}
            placeholder="Your phone number"
          />{" "}
          <input
            className="form-control m-2"
            {...register("email", { required: true })}
            placeholder="Your email"
          />{" "}
          <input
            type="number"
            {...register("age", { min: 18, max: 99 })}
            placeholder="Your age"
          />{" "}
          <select {...register("gender")}>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>{" "}
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <input class="btn btn-info m-2" type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
