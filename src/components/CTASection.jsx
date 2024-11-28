import React from "react";

const CTASection = () => {
  return (
    <div className="container-fluid text-center bg-light" style={{marginTop: "10%", padding:"3%"}}>
      <h2 className="mb-4" style={{fontSize:"40px",fontWeight:"bold"}}>
        Pellentesque suscipit<br/> fringilla libero eu.
      </h2>
      <button className="btn btn-lg text-white" style={{background:"#4CAF4F" }} >
        Get a Demo →
      </button>
    </div>
  );
};

export default CTASection;
