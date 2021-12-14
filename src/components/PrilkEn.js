import React from "react";
import ilk from "../galery/ilk.gif";

const PrilkEn = () => {
  
  return (
    <div>
      <div className="prproject">
        <h1>My First Site</h1>
        <div className="img imgPr">
          <img src={ilk} alt="" />
        </div>
        <div className="links"></div>

        <p>
          It has been <b> 20 days</b> since I started learning FrontEnd and I
          published this site on the internet. It was a happy and hopeful result
          for me.
        </p>
        <p>
          I designed unique hover effects and keyframes that I have not seen
          anywhere. Unfortunately, since I did not know git - github in those
          days, I could not save the codes I wrote and it disappeared. All
          that's left is this video.
        </p>
        <div className="ifra">
          <iframe
            src="https://www.youtube.com/embed/fYdxx9rzKF4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>{" "}
        </div>
      </div>
    </div>
  );
};

export default PrilkEn;
