import React from "react";

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/#hero" className="logo d-flex align-items-center me-auto">
          <img src="inertia/img/ss-logo-icon.png" alt="logo" />
          <h1 className="sitename">Go Entrepreneurs</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#progams-excellence">Program Excellence</a>
            </li>
            <li>
              <a href="#galery">Galery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="/#about">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
