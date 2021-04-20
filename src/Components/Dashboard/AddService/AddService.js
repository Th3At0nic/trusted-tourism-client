import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AddService = () => {
  const [serviceInfo, setServiceInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...serviceInfo };
    newInfo[e.target.name] = e.target.value;
    setServiceInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("packageName", serviceInfo.packageName);
    formData.append("price", serviceInfo.price);
    formData.append("person", serviceInfo.person);
    formData.append("detail", serviceInfo.detail);

    fetch("https://arcane-ridge-87097.herokuapp.com/addService", {
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
          <h2>Add package</h2>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">package Name</label>
              <input
                onBlur={handleBlur}
                type="text"
                class="form-control"
                name="packageName"
                placeholder="package  you want to add:"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Price</label>
              <input
                onBlur={handleBlur}
                type="number"
                class="form-control"
                name="price"
                placeholder="package price:"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Person</label>
              <input
                onBlur={handleBlur}
                type="number"
                class="form-control"
                name="person"
                placeholder="How many person:"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Description</label>
              <textarea
                onBlur={handleBlur}
                type="text"
                class="form-control"
                name="detail"
                placeholder="package description:"
                cols="30"
                rows="5"
              ></textarea>
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

export default AddService;
