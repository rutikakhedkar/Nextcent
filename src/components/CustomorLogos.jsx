import React from "react";

const CustomerLogos = () => {
  const logos = [
    "https://via.placeholder.com/50", // Replace with actual logo paths
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
    "https://via.placeholder.com/50",
  ];

  return (
    <div className="container text-center mt-4">
      <div className="d-flex flex-sm justify-content-center flex-wrap mb-3 ">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="mx-2 my-2"
            style={{ width: "50px", height: "50px" }}
          />
        ))}
      </div>
      <a href="#!" className="text-success">
        Meet all customers →
      </a>
    </div>
  );
};

export default CustomerLogos;
