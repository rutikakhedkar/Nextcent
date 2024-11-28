import React from 'react';
import logo from "../assets/Images/logos/next.png";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/service" },
    { name: "Feature", path: "/feature" },
    { name: "Product", path: "/product" },
    { name: "Testimonial", path: "/testimonial" },
    { name: "FAQ", path: "/faq" },
  ];
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
        <div className="container">
          {/* Left-aligned Logo */}
          <Link to="/" className="d-flex align-items-center navbar-brand">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "40px", height: "40px" }}
              className="me-2"
            />
            <span className="fw-bold">Nexcent</span>
          </Link>

          {/* Collapsible Navigation */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Centered Navigation Links */}
            <ul className="navbar-nav mx-auto">
              {navLinks.map((link, index) => (
                <li key={index} className="nav-item p-3">
                  <Link
                    to={link.path}
                    className={`nav-link ${link.name === "Home" ? "text-dark fw-bold" : ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right-aligned Action Buttons */}
          <div className="d-flex gap-3">
            <Link to="/login" className="btn btn-outline-success">
              Login
            </Link>
            <Link
              to="/signup"
              className="btn btn-success"
              style={{ background: "#4CAF4F" }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
