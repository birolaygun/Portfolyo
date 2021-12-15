import React from "react";
import police from "../galery/police.gif";

const PrPolice = () => {
  
  return (
    <div>
      <div className="prproject">
        <h1>Polis Arabası</h1>
        <div className="img imgPr">
          <img src={police} alt="" />
        </div>
        <div className="links">
          <h3>
            Sitenin Linki:{" "}
            <a href="https://police-car.netlify.app/">
              https://police-car.netlify.app/
            </a>
          </h3>
          <h3>
            Github Linki:{" "}
            <a href="https://github.com/birolaygun/Police-Car">
              https://github.com/birolaygun/Police-Car
            </a>
          </h3>
        </div>
        <p>
          Keyframe ve Box-shadow'ları aktif bir şekilde kullanarak yapmış olduğum bir çalışma.
          Keyif alarak yaptığım bir çalışma, Eminim siz  de siteye girerseniz keyif alacaksınız.
        </p>
        
      </div>
    </div>
  );
};

export default PrPolice;
