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
    formData.append("service", serviceInfo.service);
    formData.append("cost", serviceInfo.cost);
    formData.append("space", serviceInfo.space);
    formData.append("detail", serviceInfo.detail);

    fetch("http://localhost:5003/addService", {
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
          <h2>Add Service</h2>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">Service Name</label>
              <input
                onBlur={handleBlur}
                type="text"
                class="form-control"
                name="service"
                placeholder="Service you want to add:"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Cost</label>
              <input
                onBlur={handleBlur}
                type="number"
                class="form-control"
                name="cost"
                placeholder="Service cost:"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Available space</label>
              <input
                onBlur={handleBlur}
                type="number"
                class="form-control"
                name="space"
                placeholder="Available space:"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Description</label>
              <input
                onBlur={handleBlur}
                type="text"
                class="form-control"
                name="detail"
                placeholder="Service description:"
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

export default AddService;
