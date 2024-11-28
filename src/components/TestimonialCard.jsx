import React from "react";
import tesla from "../assets/Images/tesla.png"
import l1 from "../assets/Images/logos/l1.png"
import l2 from "../assets/Images/logos/l2.png"
import l3 from "../assets/Images/logos/l1.png"
import l4 from "../assets/Images/logos/l4.png"
import l5 from "../assets/Images/logos/l5.png"
import l6 from "../assets/Images/logos/l6.png"

const TestimonialCard = () => {
    const logos = [l1, l2, l3, l4, l5, l6];
    return (
        <div className="d-flex flex-lg-row bg-light flex-column justify-content-lg-between 
        justify-content-center align-items-center gap-3 bg-silver column-gap-3"
            style={{ padding: "2% 7%" }}>
            {/* Feedback image */}
            <img
                src={tesla}
                width={100}  // You can adjust the width and height
                height={100} // Adjust according to the actual size of the image
                alt="feedback"
                className="h-auto w-auto"
                data-aos="fade-right"
            />

            {/* Text content */}
            <div className="font-inter" data-aos="fade-left">
                <p className="fw-medium text-gray-200">
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
                    sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
                    Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
                    molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
                    molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
                    ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
                    turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
                    sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
                    neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
                    dignissim finibus ac sit amet magna.
                </p>

                <h1 className="fw-semibold fs-5 text-success mt-3">Tim Smith</h1>
                <p className="fw-normal text-gray-100 mt-2">
                    British Dragon Boat Racing Association
                </p>

                {/* Client logos section */}
                <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            width={35}
                            height={35}
                            alt={`client-${index + 1}`}
                            className="mx-1 my-1" // Reduce margin here
                        />
                    ))}
                    <section className="d-flex align-items-center justify-content-center text-center">
                        <p className="text-success fw-semibold fs-5 font-inter">
                            Meet All Customers{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-right my-auto"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                />
                            </svg>
                        </p>
                    </section>
                </div>




            </div>

        </div>
    );
};

export default TestimonialCard;
