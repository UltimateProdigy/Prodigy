import React from "react";
import "./Navbar.css";
import logoimg from "../../img/code.png";
import github from "../../img/github.png";
import twitter from "../../img/twitter.png";
import linkedin from "../../img/linkedin.png";

const Navbar = () => {
    return (
        <section className="navbar">
            <div>
                <img src={logoimg} alt="prodigy_logo" width={40} />
            </div>
            <div className="second" >
                <div>
                <ul className="links">
                    <li><a href=""> Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Tech Stark</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contacts</a></li>
                </ul>
                </div>
                <div>
                <img className="imglinks" src={github} alt="githubimg" />
                <img className="imglinks" src={twitter} alt="twitterimg" />
                <img className="imglinks" src={linkedin} alt="linkedinimg" />
                </div>
            </div>
            </section>

    )
}

export default Navbar;