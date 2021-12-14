import React from 'react'
import portfolyo from "../galery/portfolyo.gif";

const PrPortfolyoEn = () => {
  
    return (
      <div className="prproject">
        <h1>Portfolio</h1>
        <div className="img imgPr">
          <img src={portfolyo} alt="" />
        </div>
        <p>This site you are viewing right now was prepared by me.</p>
        <p>
          I created this project using <b>React</b> {""}. Also, I made my first {" "}
          <b>SCSS</b> {""} experience in this project.
        </p>
      </div>
    );
}

export default PrPortfolyoEn;
