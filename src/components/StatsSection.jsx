import React from "react";
import StatCard from "./Statscard";
import l1 from "../assets/Images/helpinglogos/l1.svg"
import l2 from "../assets/Images/helpinglogos/l2.svg"
import l3 from "../assets/Images/helpinglogos/l3.svg"
import l4 from "../assets/Images/helpinglogos/l4.png"
import { FaHeart } from "react-icons/fa6";

const StatsSection = () => {
    return (
        <div className="container-fluid bg-light" style={{ padding: "50px" }}>
            <div className="container ">
                <div class="row featurette">

                    <div class="col-md-6">
                        <div className="text-left mb-5 px-5" >
                            <h2 style={{fontWeight:"bold" }} >
                                Helping a local <br /><span className="" style={{color:"#4CAF4F" }}>business reinvent itself</span>
                            </h2>
                            <p className="text-muted">We reached here with our hard work and dedication</p>
                        </div>
                    </div>
                    <div class="col-md-6" style={{ justifyContent: "center" }}>
                        <div class="row">
                            <div class="col">
                                <StatCard
                                    icon={<img src={l1} alt="Wallet Icon" style={{ width: "40px", height: "40px" }} />}
                                    number={1926436}
                                    label="Payments"
                                    iconClass=""
                                />

                            </div>
                            <div class="col">
                                <StatCard
                                    icon={<img src={l4} alt="Wallet Icon" style={{ width: "40px", height: "40px" }} />}
                                    number={46328}
                                    label="Clubs"
                                    iconClass="text-success opacity-75"
                                />
                            </div>
                            <div class="w-100"></div>
                            <div class="col">
                                <StatCard
                                    icon={<img src={l2} alt="Wallet Icon" style={{ width: "40px", height: "40px" }} />}
                                    number={828867}
                                    label="Event Bookings"
                                    iconClass="text-success"
                                />
                            </div>
                            <div class="col">
                                <StatCard
                                    icon={<img src={l3} alt="Wallet Icon" style={{ width: "40px", height: "40px" }} />}
                                    number={1926436}
                                    label="Payments"
                                    iconClass="text-success opacity-75"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
