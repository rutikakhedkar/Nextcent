import React from 'react';
import member from '../assets/Images/logos/member.png';
import associates from '../assets/Images/logos/associates.png';
import club from '../assets/Images/logos/club.png';

const Community = () => {
    return (
        <div className="text-center py-5">
            <h2 className="mb-3" style={{ fontWeight: "bold" }}>
                Manage your entire community
                <br />in a single system
            </h2>

            <p className="text-muted mb-4" style={{ fontSize: "18px" }}>Who is Nextcent suitable for?</p>
            <div className="container">
                <div className="row g-3" style={{ justifyContent: "center" }}> {/* Adjusting gap and alignment */}
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card border-0" style={{ width: "18rem", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
                            <div className="card-body text-center" style={{ padding: "1.5rem" }}>
                                <div className="mb-3">
                                    <img src={member} alt="Membership Organisations Icon" className="img-fluid" style={{ width: "60px", height: "60px" }} />
                                </div>
                                <h5 className="card-title" style={{ fontWeight: "600", fontSize: "1.50rem" }}>Membership<br />Organisations</h5>
                                <p className="card-text" style={{ fontSize: "1rem", color: "#555" }}>
                                    Our membership management software provides full automation of membership renewals and payments.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card border-0" style={{ width: "18rem", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
                            <div className="card-body text-center" style={{ padding: "1.5rem" }}>
                                <div className="mb-3">
                                    <img src={associates} alt="National Associations Icon" className="img-fluid" style={{ width: "60px", height: "60px" }} />
                                </div>
                                <h5 className="card-title" style={{ fontWeight: "600", fontSize: "1.50rem" }}>National<br />Associations</h5>
                                <p className="card-text" style={{ fontSize: "1rem", color: "#555" }}>
                                    Our membership management software provides full automation of membership renewals and payments.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card border-0" style={{ width: "18rem", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
                            <div className="card-body text-center" style={{ padding: "1.5rem" }}>
                                <div className="mb-3">
                                    <img src={club} alt="Clubs And Groups Icon" className="img-fluid" style={{ width: "60px", height: "60px" }} />
                                </div>
                                <h5 className="card-title" style={{ fontWeight: "600", fontSize: "1.50rem" }}>Clubs<br />And Groups</h5>
                                <p className="card-text" style={{ fontSize: "1rem", color: "#555" }}>
                                    Our membership management software provides full automation of membership renewals and payments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Community;
