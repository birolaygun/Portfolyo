import React from "react";
import Logo from "../LOGO.gif";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div>
      <div className="nav">
        <div className="leftNav">
          <Link to="/"><img src={Logo} alt="" />
          </Link> 
        </div>

        <div className="rightNav">
          <button className="btn ">EN</button>
          <div className="social">
            <Link to="">
              <i class="fab fa-2x fa-twitter"></i>
            </Link>
            <Link to="">
              <i class="fab fa-2x fa-instagram"></i>
            </Link>
            <Link to="">
              <i class="fab fa-2x fa-linkedin-in"></i>
            </Link>
            <Link to="">
              <i class="fab fa-2x fa-github"></i>{" "}
            </Link>
          </div>
        </div>
      </div>

      <div className="navMd">
        
                           <Link to="/">
 <img src={Logo} alt="" /> </Link>
                  <button className="btn ">EN</button>
        
</div>
        <div className="socialMd">
          <Link to="">
            <i class="fab fa-2x fa-twitter"></i>
          </Link>
          <Link to="">
            <i class="fab fa-2x fa-instagram"></i>
          </Link>
          <Link to="">
            <i class="fab fa-2x fa-linkedin-in"></i>
          </Link>
          <Link to="">
            <i class="fab fa-2x fa-github"></i>{" "}
          </Link>
        </div>

      
    </div>
  );
};

export default Nav;
