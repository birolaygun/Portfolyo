import React from 'react'
import portfolyo from "../galery/portfolyo.gif";

const PrPortfolyo = () => {
  
    return (
      <div className="prproject">
        <h1>Portfolyo</h1>
<div className="img imgPr">
    <img src={portfolyo} alt="" />
</div>
        <p>
          This site you are viewing right now was prepared by me.
        </p>
        <p>
          Bu projeyi <b>React</b> {""} kullanarak hazırladım. Ayrıca ilk {" "}
          <b>SCSS</b>
          {""} deneyimimi yine bu projede gerçekleştirdim.
        </p>
      </div>
    );
}

export default PrPortfolyo
