import React from 'react';
import pixelImg from '../assets/Images/two_people.png'

const Pixel = ({img,content}) => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Image Section */}
        <div className="col-md-6 text-center">
          <img
            src={img}
            alt="Illustration"
            className="img-fluid"
            style={{ width: "85%"}}
          />
        </div>

        {/* Right Text Section */}
        <div className="col-md-6">
          <h2 className="mb-4" style={{fontWeight: "bold", fontWeight:"35px"}}>{content}</h2>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed 
            accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.
            Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis 
            massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className="btn mt-3 py-2 px-2 text-white" style={{background:"#4CAF4F" }}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Pixel;
