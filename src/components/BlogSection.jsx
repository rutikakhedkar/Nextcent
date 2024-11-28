import React from "react";
import l1 from "../assets/Images/blog/l1.svg";
import l2 from "../assets/Images/blog/l2.svg";
import l3 from "../assets/Images/blog/l3.svg";

const BlogSection = () => {
  const cards = [
    {
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: l1,
      link: "/safeguarding-processes",
    },
    {
      title: "What are your safeguarding responsibilities and how can you manage them?",
      image: l2,
      link: "/safeguarding-responsibilities",
    },
    {
      title: "Revamping the Membership Model with Triathlon Australia",
      image: l3,
      link: "/membership-model",
    },
  ];

  return (
    <>
      <div className="text-center mt-5">
        <div className="font-inter" data-aos="fade-right ">
          <h1 className="fs-1 lh-base text-gray-900 fw-bold" >
            Caring is the new marketing
          </h1>
          <p className="text-gray-200 fw-light fs-6">
            The Nexcent blog is the best place to read about the latest membership
            insights, trends and more. <br /> See who&lsquo;s joining the
            community, read about how our community are <br /> increasing their
            membership income and lot&lsquo;s more.
          </p>
        </div>
      </div>
      <div className="container my-5 mb-5">
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0" style={{ borderRadius: "10px" }}>
                <img
                  src={card.image}
                  className="card-img-top"
                  alt={card.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body px-4 py-4 w-75 shadow text-center d-flex flex-column justify-content-center align-items-center bg-light position-absolute top-100 start-50 translate-middle rounded-3">
                  <h5 className="card-title" style={{ fontSize: "1rem", fontWeight: "600" }}>
                    {card.title}
                  </h5>
                  <a
                    href={card.link}
                    className="btn  mt-3"
                    style={{
                      fontWeight:"bold",
                      color: "#4CAF4F",
                    }}
                    
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSection;