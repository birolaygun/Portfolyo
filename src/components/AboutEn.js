import React from "react";
import brl from "../Brl.jpg";

const AboutEn = () => {
  
  return (
    <div className="aboutme">
      <h1>About Me</h1>
      <div className="img">
        <img src={brl} alt="" />
      </div>
      <div className="introduction">
        <h2>Who Is Birol AYGÜN ?</h2>
        <p>
          I was born on 22/11/1987 in Ankara. My father was a worker and my
          mother was a housewife. My childhood passed in Kazan district I
          finished <b>Şahin İlköğretim Okulu</b> here.
        </p>

        <h2>My Education Life</h2>
        <p>
          {" "}
          I graduated from <b>Etimesgut Anatolian High School</b>, which I
          entered in 2002, in 2006. In 2007, I moved to the <b>METU</b>{" "}
          Elementary Science Education then in 2008
          I left METU. 
        </p>

        <h2>My Meeting with FrontEnd</h2>
        <p>
          {" "}
          I loved the Web Design job, after my research, I decided to develop
          myself on FrontEnd. I started my education on <b>Udemy</b>. I
          completed my education quickly. It had only been 20 days since I
          started my education that I had already published my first site on the
          Internet. Later, I increased my experience with many projects and the
          sites I published.{" "}
        </p>
        <h2>My Hobbies</h2>
        <p>
          Actually, I have many hobbies, but one is ahead of the others.{" "}
          <b>Aquarium</b> is a very enjoyable hobby and it is very difficult for
          beginners to quit. I am currently keeping angel fish and transgenetic tetra
          fish in my planted aquarium.
        </p>
      </div>
    </div>
  );
};

export default AboutEn;
