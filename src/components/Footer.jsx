import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import logofooter from "../assets/Images/logos/logo_footer.svg";


const Footer = () => {
    const socialMedia = [
        { href: "#", icon: <BsInstagram />, name: "Instagram" },
        { href: "#", icon: <FaDribbble />, name: "Dribbble" },
        { href: "#", icon: <FaTwitter />, name: "Twitter" },
        { href: "#", icon: <FaYoutube />, name: "YouTube" },
    ];
    return (
        <footer className="bg-dark text-white p-5">
            <div className="container">
                <div className="row">
                    {/* Logo and Copyright */}
                    <div className="col-lg-5 mb-3">
                        <h5 className="mb-3 d-flex align-items-center" style={{fontWeight:"bold", fontSize:"25px"}}>
                            <img
                                src={logofooter} // Replace with your logo file
                                alt="Nexcent Logo"
                                className="me-2"
                                style={{ width: "30px", height: "30px" }}
                            />
                            Nexcent
                        </h5>
                        <p className="mb-4">Copyright © 2020 Nexcent Ltd.
                            <br />All rights reserved</p>
                        {/* Social Media Links Below the Copyright */}
                        <div className="d-flex justify-content-start">
                            {socialMedia.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="social-icon d-flex align-items-center justify-content-center me-3 
                                    bg-secondary bg-opacity-50 text-white border-secondary p-2 rounded-circle"
                                    aria-label={social.name} // Improves accessibility
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="col-lg-2 mb-3">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">About us</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Contact us</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Pricing</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Testimonials</a></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="col-lg-2 mb-3">
                        <h5>Support</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Help center</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Terms of service</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Legal</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Privacy policy</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Status</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-lg-3">
                        <h5>Stay up to date</h5>
                        <div className="input-group">
                            <input
                                type="email"
                                className="form-control bg-secondary bg-opacity-50 text-light shadow-none border border-0"
                                id="exampleFormControlInput1"
                                data-bs-theme="dark"
                                placeholder="Your email address"
                            />
                            <button className="btn btn-secondary" style={{ opacity: "0.5"}}>
                                <IoIosSend />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
