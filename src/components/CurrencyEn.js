import React from "react";
import currency from "../galery/currency.gif";

const CurrencyEn = () => {
  return (
    <div>
      <div className="prproject">
        <h1>Currency Convert</h1>
        <div className="img imgPr">
          <img src={currency} alt="" />
        </div>
        <div className="links">
          <h3>
            Site's Link:{" "}
            <a href="https://currency-convert-now.netlify.app/">
              currency-convert-now.netlify.app
            </a>
          </h3>
          <h3>
            Github Link:{" "}
            <a href="https://github.com/birolaygun/CurrencyConvert">
              github.com/birolaygun/CurrencyConvert
            </a>
          </h3>
        </div>
        <ul>
          <li>
            It allows you to make calculations on all exchange rates instantly
            with up-to-date data
          </li>
          <li>
            With the line chart, you can see the exchange rate values from 2020
          </li>
          <li>
            You can access the statistical information of the last 30 and the
            last 90 days
          </li>
          <li>Giving depreciation and value increase proportionally </li>
        </ul>
        <p>
          This site, which I prepared using Next and Tailwind, has a perfectly
          responsive look. In particular, the Line Chart I got from a library
          was highly appreciated.
        </p>

        <div className="ifra">
          <iframe
            src="https://www.youtube.com/embed/toFKMKH6QG0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CurrencyEn;
