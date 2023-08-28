import React from "react";
import "./Contact.css";
import Navbar from "../../Component/Navbar/Navbar";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Twitter from "../../img/twitter.png";


const Contact = () => {
    return (
        <div>
            
            <div className="contact">
                <h1>For any questions please mail me:</h1>
                <h2>ayobamiakinola84@gmail.com</h2>
            </div>
            <div className="contact-me">
                <h1>+234 90 3091 4289</h1>
                <h2>ayobamiakinola84@gmail.com</h2>
                <div >
                    <img className="contactimages" src={Github} alt="" />
                    <img className="contactimages" src={Linkedin} alt="" />
                    <img className="contactimages" src={Twitter} alt="" />
                </div>
            </div>
            <hr />

        </div>
    )
}

export default Contact;