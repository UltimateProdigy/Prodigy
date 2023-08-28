import React from "react";
import "./About.css"
import locationimg from "../../img/Location.png"

const Workexperience = () => {
    return (
        <div className="workexperience">
                <h1>Work Experience</h1>
                <div className="work">
                    <h3>Junior Frontend Developer</h3>
                    <div className="fulltime"><h2>Full Time</h2></div>
                </div>
                <div className="locationdiv">
                <div className="location">
                    <div><h4>The Tech Hub</h4></div>
                    <div><h3><img className="imglocation" src={locationimg} alt="" />Ile Ife, Osun State</h3></div>
                </div>
                <div>
                    <h4 className="date">January 2023 - till date</h4>
                </div>
                </div>
                
        </div>
    )
};

export default Workexperience;