import React from 'react';
import '../css/Navbar.css';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid nav-container d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <img src="/src/images/logo-F1.png" alt="F1-Logo" width="100" className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link link-font" href="#">Drivers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-font" href="#">Constructors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-font" href="#">Races</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar
