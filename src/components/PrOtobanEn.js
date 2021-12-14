import React from "react";
import otoban from "../galery/otoban.gif";

const PrOtobanEn = () => {
  return (
    <div>
      <div className="prproject">
        <h1>Otoban Oto</h1>
        <div className="img imgPr">
          <img src={otoban} alt="" />
        </div>
        <div className="links">
          <h3>
            Site's Link:{" "}
            <a href="https://www.otobanotokaporta.com/">
              www.otobanotokaporta.com
            </a>
          </h3>
          <h3>
            Github Link:{" "}
            <a href="https://github.com/birolaygun/otoban-oto">
              github.com/birolaygun/otoban-oto
            </a>
          </h3>
        </div>

        <p>
          This is the first site I made for commercial purposes. I worked very
          hard on it. It has responsive design.
        </p>
        <p>
          I developed my project using a Navbar I liked from Github. I used
          location display via Google Maps using iframe. I added the features of
          calling the business owner, sending a whatsupp message and opening
          navigation with one touch.
        </p>
      </div>
    </div>
  );
};

export default PrOtobanEn;
