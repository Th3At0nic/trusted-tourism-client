import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AddMember = () => {
  const [personInfo, setPersonInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...personInfo };
    newInfo[e.target.name] = e.target.value;
    setPersonInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", personInfo.name);
    formData.append("email", personInfo.email);

    fetch("https://arcane-ridge-87097.herokuapp.com/addMember", {
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
          <h2>Add Member</h2>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                onBlur={handleBlur}
                type="email"
                class="form-control"
                name="email"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Name</label>
              <input
                onBlur={handleBlur}
                type="text"
                class="form-control"
                name="name"
                placeholder="Name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Specialist</label>
              <input
                onBlur={handleBlur}
                type="text"
                class="form-control"
                name="role"
                placeholder="Expert about:"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Upload image</label>
              <input
                onChange={handleFileChange}
                type="file"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Image"
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

export default AddMember;
