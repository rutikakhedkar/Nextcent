import React from "react";

const StatCard = ({ icon, number, label }) => {
  return (
    <div className="col-6 text-center mb-4">
    <div className="d-flex align-items-center justify-content-center mb-2">
      <div className="me-2">{icon}</div> {/* Icon */}
      <h3 className="text-success mb-0">{number.toLocaleString()}</h3> {/* Number */}
    </div>
    <p className="text-muted">{label}</p>
  </div>
  );
};

export default StatCard;
