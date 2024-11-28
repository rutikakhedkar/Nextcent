import React from 'react';
import l1 from "../assets/Images/logos/l1.png"
import l2 from "../assets/Images/logos/l2.png"
import l3 from "../assets/Images/logos/l3.png"
import l4 from "../assets/Images/logos/l4.png"
import l6 from "../assets/Images/logos/l6.png"
import l7 from "../assets/Images/logos/l7.png"

const Client = () => {
  const logos = [
    { src: l2, alt: "Client Logo 1", width: "13%" },
    { src: l1, alt: "Client Logo 2", width: "18%" },
    { src: l3, alt: "Client Logo 3", width: "20%" },
    { src: l7, alt: "Client Logo 4", width: "22%" },
    { src: l4, alt: "Client Logo 5", width: "17%" },
    { src: l6, alt: "Client Logo 6", width: "20%" },
    { src: l3, alt: "Client Logo 7", width: "20%" },
    
  ];
  
  return (
    <section className="py-5 bg-white text-center">
    {/* Section Header */}
    <div className="mb-4" data-aos="fade-down">
      <h1 className="text-dark fw-bold">Our Clients</h1>
      <p className="text-muted fw-light" style={{fontSize:"20px"}}>
        We have been working with some Fortune 500+ clients
      </p>
    </div>

    {/* Logos Row */}
    <div
      className="d-flex justify-content-between align-items-center flex-wrap"
      data-aos="zoom-in"
    >
      {logos.map((logo, index) => (
        <div
          className="p-2"
          key={index}
          style={{ flex: "1 1 calc(14.28% - 10px)", textAlign: "center" }}
        >
          <img
            src={logo.src}
            alt={`client-${logo}`}
            className="img-fluid"
            style={{ maxWidth: "80px", height: "auto" }}
          />
        </div>
      ))}
    </div>
  </section>
  );
};

export default Client;
