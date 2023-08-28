import React from "react";
import { useState } from "react";
import "./Navbar.css";
import logoimg from "../../img/code.png";
import github from "../../img/github.png";
import twitter from "../../img/twitter.png";
import linkedin from "../../img/linkedin.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Icon } from "react-icons-kit";
import { navicon } from "react-icons-kit/fa/navicon";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <section className="navbar">
        <div>
          <img src={logoimg} alt="prodigy_logo" width={40} />
        </div>
        <div className="second">
          <div>
            <ul className="links">
              <Link style={{ textDecoration: "none" }} to="/">
                <li>Home</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/about">
                <li>About</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/techstack">
                <li>Tech Stack</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/projects">
                <li>Projects</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/contact">
                <li>Contacts</li>
              </Link>
            </ul>
          </div>
          <div>
            <Link
              to={{ pathname: "https://github.com/UltimateProdigy" }}
              target="_blank"
            >
              <img className="imglinks" src={github} alt="githubimg" />
            </Link>
            <Link
              to={{ pathname: "http://twitter.com/Akinola46532641" }}
              target="_blank"
            >
              <img className="imglinks" src={twitter} alt="twitterimg" />
            </Link>
            <Link
              to={{
                pathname:
                  "https://www.linkedin.com/in/akinola-ayobami-2a9a41270/",
              }}
              target="_blank"
            >
              <img className="imglinks" src={linkedin} alt="linkedinimg" />
            </Link>
          </div>
        </div>
        <div className="toggleButton" style={{ color: "#FFF" }}>
          <Icon style={{ cursor: "pointer"}} onClick={handleToggle} icon={navicon} size={35} />
        </div>
      </section>
      
      {toggle ?
      <div
        className="togglerDiv"
      >
        <ul className="toggler">
          <Link style={{ textDecoration: "none" }} to="/">
            <li>Home</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/about">
            <li>About</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/techstack">
            <li>Tech Stack</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/projects">
            <li>Projects</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contact">
            <li>Contacts</li>
          </Link>
        </ul>
        <div>
        <Link
              to={{ pathname: "https://github.com/UltimateProdigy" }}
              target="_blank"
            >
              <img className="togglelinks" src={github} alt="githubimg" />
            </Link>
            <Link
              to={{ pathname: "http://twitter.com/Akinola46532641" }}
              target="_blank"
            >
              <img className="togglelinks" src={twitter} alt="twitterimg" />
            </Link>
            <Link
              to={{
                pathname:
                  "https://www.linkedin.com/in/akinola-ayobami-2a9a41270/",
              }}
              target="_blank"
            >
              <img className="togglelinks" src={linkedin} alt="linkedinimg" />
            </Link>
        </div>
      </div> : ''}
    </div>
  );
};

export default Navbar;
