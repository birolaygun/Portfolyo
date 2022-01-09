import React from "react";
import glomil from "../galery/glomil.gif";

const PrInstagramEn = () => {
  return (
    <div>
      <div className="prproject">
        <h1>Glomil</h1>
        <div className="img imgPr">
          <img src={glomil} alt="" />
        </div>
        <div className="links">
          <h3>
            Site's Link:{" "}
            <a href="https://glomil.netlify.app/">glomil.netlify.app</a>
          </h3>
          <h3>
            Github Link:{" "}
            <a href="https://github.com/birolaygun/Glomil">
              github.com/birolaygun/Glomil
            </a>
          </h3>
        </div>

        <p>
          In this application that I developed with React <b>TypeScript</b>, you
          add and remove personnel from your List. The name, gender, unit of
          employment, date of employment and date of departure of each personnel
          are entered.
        </p>

        <p>
          There are 2 charts at the bottom of the list. The first is the graph
          showing the hours worked at <b> by gender </b>, the second is the
          graphic showing the hours worked at <b> by the unit of employment </b>
          .
        </p>
        <p>
          After each addition or subtraction made in the list, the graph takes
          action and is updated instantly.
        </p>

        <div className="ifra">
          <iframe
            src="https://www.youtube.com/embed/dAgvzFqSSck"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PrInstagramEn;
