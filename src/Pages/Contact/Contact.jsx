import React from "react";
import "./Contact.css";
import Navbar from "../../Component/Navbar/Navbar";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Twitter from "../../img/twitter.png";
import { Link } from "react-router-dom/cjs/react-router-dom";

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
        <div>
          <Link
            to={{ pathname: "https://github.com/UltimateProdigy" }}
            target="_blank"
          >
            <img className="contactimages" src={Github} alt="githubimg" />
          </Link>
          <Link
            to={{ pathname: "http://twitter.com/Akinola46532641" }}
            target="_blank"
          >
            <img className="contactimages" src={Twitter} alt="twitterimg" />
          </Link>
          <Link
            to={{
              pathname:
                "https://www.linkedin.com/in/akinola-ayobami-2a9a41270/",
            }}
            target="_blank"
          >
            <img className="contactimages" src={Linkedin} alt="linkedinimg" />
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Contact;
