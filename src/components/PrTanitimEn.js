import React from "react";
import birol from "../galery/birol.gif";
import speed1 from "../galery/speed1.PNG";
import speed2 from "../galery/speed2.PNG";
import ahrefs1 from "../galery/ahrefs1.PNG";
import ahrefs2 from "../galery/ahrefs2.PNG";
import ahrefs3 from "../galery/ahrefs3.PNG";

const PrTanitimEn = () => {
  return (
    <div>
      <div className="prproject">
        <h1>Promotion</h1>
        <div className="img imgPr">
          <img src={birol} alt="" />
        </div>
        <div className="links">
          <h3>
            Site's Link:{" "}
            <a href="https://birolaygunpersonel.netlify.app">
              birolaygunpersonel.netlify.app
            </a>
          </h3>
          <h3>
            Github Link:{" "}
            <a href="https://github.com/birolaygun/-Personal">
              github.com/birolaygun/Personal
            </a>
          </h3>
        </div>
        <p>
          A company that I applied for a job asked me to make a website with
          certain conditions as homework so that we could start the interview. I
          made this site at their request. The site met their expectations and I
          was called for an interview.
        </p>
        <p>
          I created this project using <b>React</b> {""}. It has a successful{" "}
          <b>responsive</b> design.
        </p>
        <h2>SEO</h2>
        <p>
          My site got a <b>90%</b> rating from{" "}
          <a href="https://ahrefs.com/tr">ahrefs.com</a>, one of the leading SEO
          sites. Broke 10% points for 2 mistakes. The reason for these errors is
          due to the "Your Connection Is Not Private" warning. To fix this, SSL
          package needs to be purchased. You can find the necessary information{" "}
          <a href="https://www.hostinger.web.tr/guides/yourlink-not-private/">
            here
          </a>{" "}
          .{" "}
          <b>
            In other words, if I had purchased the SSL package, my site would
            have received 100% points in the SEO evaluation.
          </b>{" "}
          The photos below are screenshots from ahrefs.
        </p>
        <img src={ahrefs1} alt="" />
        <img src={ahrefs2} alt="" />
        <img src={ahrefs3} alt="" />
        <h2>SPEED</h2>
        <p>
          I used Google PageSpeed Insights for speed measurement. MySite{" "}
          <b>Scored 98 in Desktop view and 78 in Mobile view</b>
        </p>
        <img src={speed1} alt="" />
        <img src={speed2} alt="" />
      </div>
    </div>
  );
};

export default PrTanitimEn;
