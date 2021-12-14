import Logo from "../darkBrl.gif";
import buz from "../buzBrl.gif";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const NavEn = () => {
  const [enLink, setEnLink] = useState(window.location.href);
  return (
    <div>
      <div className="nav">
        <div className="leftNav">
          <Link to="/en/">
            <img src={buz} alt="" />
          </Link>
        </div>

        <div className="rightNav">
          <a
            href={enLink}
            onClick={() => {
              if (enLink.split("/").indexOf("en") > -1) {
                setEnLink(enLink.slice(0, -3));
              } else {
                setEnLink(enLink + "en/");
              }
            }}
          >
            <button href={enLink} className="btn">
              TR
            </button>
          </a>

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
        <Link to="/en/">
          <img src={Logo} alt="" />{" "}
        </Link>

        <a
          href={enLink}
          onClick={() => {
            if (enLink.split("/").indexOf("en") > -1) {
              setEnLink(enLink.slice(0, -3));
            } else {
              setEnLink(enLink + "en/");
            }
          }}
        >
          <button href={enLink} className="btn">
            TR
          </button>
        </a>
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

export default NavEn;
