import React from "react";
import police from "../galery/police.gif";

const PrPoliceEn = () => {
  
  return (
    <div>
      <div className="prproject">
        <h1>Police Car</h1>
        <div className="img imgPr">
          <img src={police} alt="" />
        </div>
        <div className="links">
          <h3>
            Site's Link:{" "}
            <a href="https://police-car.netlify.app/">
              https://police-car.netlify.app/
            </a>
          </h3>
          <h3>
            Github Link:{" "}
            <a href="https://github.com/birolaygun/Police-Car">
              https://github.com/birolaygun/Police-Car
            </a>
          </h3>
        </div>
        <p>
          A work that I have done by actively using Keyframe and Box-shadows.
          It's a work that I have done with pleasure, I'm sure you will enjoy it
          if you enter the site.
        </p>
      </div>
    </div>
  );
};

export default PrPoliceEn;
