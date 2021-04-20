import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AddReview = () => {
  const [personInfo, setPersonInfo] = useState({});

  const handleBlur = (e) => {
    const newInfo = { ...personInfo };
    newInfo[e.target.name] = e.target.value;
    setPersonInfo(newInfo);
  };

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("name", personInfo.name);
    formData.append("from", personInfo.from);
    formData.append("detail", personInfo.detail);

    fetch("http://localhost:5003/addReview", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 p-5">
          <h2>Whats your opinion about us?</h2>
          <p>let us know how can we improve</p>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputPassword1">Name</label>
              <input
                onBlur={handleBlur}
                type="text"
                class="form-control"
                name="name"
                placeholder="Your name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">City</label>
              <input
                onBlur={handleBlur}
                type="text"
                class="form-control"
                name="from"
                placeholder="You are from:"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Description</label>
              <textarea
                onBlur={handleBlur}
                type="text"
                class="form-control"
                name="detail"
                placeholder="Let us know what you think"
              />
            </div>

            <button type="submit" class="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddReview;
