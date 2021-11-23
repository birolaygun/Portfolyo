import React from "react";
import Logo from "../LOGO.gif";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div>
      <div className="nav">
        <div className="leftNav">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>

        <div className="rightNav">
          <button className="btn ">EN</button>
          <div className="social">
            <a href="https://twitter.com/BirolAygun2?t=gTKDKjr6X27lBL-L9pWHKA&s=09">
              <i class="fab fa-2x fa-twitter"></i>
            </a>
            <a href="https://instagram.com/birolaygun2?utm_medium=copy_link">
              <i class="fab fa-2x fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/birol-ayg%C3%BCn-89a346222">
              <i class="fab fa-2x fa-linkedin-in"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCRnkf1wfBNBPRm7NoSf4PoA">
              <i className="fab fa-youtube fa-2x"></i>{" "}
            </a>
            <a href="https://github.com/birolaygun">
              <i class="fab fa-2x fa-github"></i>{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="navMd">
        <Link to="/">
          <img src={Logo} alt="" />{" "}
        </Link>
        <button className="btn ">EN</button>
      </div>
      <div className="socialMd">
        <a href="https://twitter.com/BirolAygun2?t=gTKDKjr6X27lBL-L9pWHKA&s=09">
          <i class="fab fa-2x fa-twitter"></i>
        </a>
        <a href="https://instagram.com/birolaygun2?utm_medium=copy_link">
          <i class="fab fa-2x fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/birol-ayg%C3%BCn-89a346222">
          <i class="fab fa-2x fa-linkedin-in"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCRnkf1wfBNBPRm7NoSf4PoA">
          <i className="fab fa-youtube fa-2x"></i>{" "}
        </a>
        <a href="https://github.com/birolaygun">
          <i class="fab fa-2x fa-github"></i>{" "}
        </a>
      </div>
    </div>
  );
};

export default Nav;
