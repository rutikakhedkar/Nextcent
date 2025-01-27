import React from 'react';
import heroImage from '../assets/Images/Add a subheading.png'; // Replace with your image path

const HeroSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold" style={{ fontFamily: "'Roboto', sans-serif", fontSize:"55px"}}>
              Lessons and insights 
              <p className="" style={{ fontFamily: "'Roboto', sans-serif", color:"#4CAF4F"}} >from 8 years</p>
            </h1>
            <p className="text-muted mb-4">
              Where to grow your business as a photographer: site or social media?
            </p>
            <button className="btn  btn-lg mb-2 rounded-2" style={{background:"#4CAF4F" }}>Register</button>
          </div>
          <div className="col-md-6 text-center">
            <img src={heroImage} alt="Hero Illustration" className="img-fluid" 
            style={{width:"85%"}}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
