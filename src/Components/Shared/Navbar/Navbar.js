import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item me-5">
              <a class="nav-link active" aria-current="page" href="#">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="#">
                <Link to="/dashboard">Dashboard</Link>
              </a>
            </li>

            <li class="nav-item me-5">
              <a class="nav-link" href="#">
                Services
              </a>
            </li>

            <li class="nav-item me-5">
              <a class="nav-link" href="#">
                Reviews
              </a>
            </li>

            <li class="nav-item me-5">
              <a class="nav-link" href="#">
                Blogs
              </a>
            </li>

            <li class="nav-item me-5">
              <a class="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
