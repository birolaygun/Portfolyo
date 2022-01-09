import React from "react";
import insta from "../galery/insta.gif";

const PrInstagramEn = () => {
  return (
    <div>
      <div className="prproject">
        <h1>İnstagram</h1>
        <div className="img imgPr">
          <img src={insta} alt="" />
        </div>
        <div className="links">
          <h3>
            Site's Link:{" "}
            <a href="https://cloned-instagram.netlify.app">
              cloned-instagram.netlify.app
            </a>
          </h3>
          <h3>
            Github Link:{" "}
            <a href="https://github.com/birolaygun/Instagram-Clone">
              github.com/birolaygun/Instagram-Clone
            </a>
          </h3>
        </div>
        <p>
          I cloned Instagram by using{" "}
          <b>
            React, Next.Js, Recoil, Firebase, Google Authenticator, Tailwing
          </b>{" "}
          Of course not 100%, but the interface is exactly the same.
        </p>
        <p>
          You can do;
          <ul>
            <li className="fs-5 fw-bold mt-2">Signin with Google</li>
            <li className="fs-5 fw-bold">Add a photo</li>
            <li className="fs-5 fw-bold">Add a Comment</li>
            <li className="fs-5 fw-bold">Like</li>
          </ul>
          in this site. Since your transactions are kept with{" "}
          <b>Google Firebase </b> , they stay on the page permanently. It does
          not disappear even if you refresh the page.
        </p>

        <div className="ifra">
          <iframe
            src="https://www.youtube.com/embed/j7EQHJUIf5I"
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
