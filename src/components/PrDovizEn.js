import React from "react";
import döviz from "../galery/döviz.gif";

const PrDovizEn = () => {
  
  return (
    <div>
      <div className="prproject">
        <h1>Calculate Currency</h1>
        <div className="img imgPr">
          <img src={döviz} alt="" />
        </div>
        <div className="links">
          <h3>
            Site's Link:{" "}
            <a href="https://dovizhesapla.netlify.app">
              dovizhesapla.netlify.app
            </a>
          </h3>
          <h3>
            Github Link:{" "}
            <a href="https://github.com/birolaygun/Guncel_Doviz_Hesapla">
              github.com/birolaygun/Guncel_Doviz_Hesapla
            </a>
          </h3>
        </div>

        <p>
          One of the first projects I developed with JavaScript. You can
          calculate the current exchange rate by making <b>Get Request </b> with{" "}
          <b>Fetch</b>. Api adress{" "}
          <small>
            http://api.exchangeratesapi.io/v1/latest?access_key=28c70045d4518c03b26a5a75eb86ded6&format=1
          </small>
          <br />
          When I Deploy my project, it didn't work because data migration from
          Api is not allowed. If you want to run this project, you need to clone
          the project to your computer and run it on Local Host.
        </p>
        <p>
          If you watch the youtube video, you can see how it works in Local
          Host.
        </p>
        <div className="ifra">
          <iframe
            src="https://www.youtube.com/embed/bW9eQJyI_8s"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>{" "}
        </div>
      </div>
    </div>
  );
};

export default PrDovizEn;
