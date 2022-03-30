import React from "react";
import ws from "../galery/wsEkran.gif";

const PrWhatsAppEn = () => {
  return (
    <div>
    <div className="prproject">
      <h1>WhatsApp</h1>
      <div className="img imgPr">
        <img src={ws} alt="" />
      </div>
      <div className="links">
        <h3>
        Site's Link:{" "}
          <a href="https://whatsapq.netlify.app/">whatsapq.netlify.app/</a>
        </h3>
        <h3>
        Github Link:{" "}
          <a href="https://github.com/birolaygun/WhatsApp">
            github.com/birolaygun/WhatsApp
          </a>
        </h3>
      </div>
      <b className="desci">
        {" "}
        I develop this project by using Next.js, TailWind, Redux and fireStore .
      </b>
      <ul>
        <br />

        <li>Enter with Google Authantication</li>
        <li>Add a person by e-mail adres to messaging</li>
        <li>Then start messaging like WhatsApp App</li>
        <li>You can send music, video, photo and file</li>
        <li>
          If you want to send a message to me, please add me. "birolaygun.bilisim@gmail.com"
        </li>
      </ul>

      <div className="ifra">
        <iframe
          src="https://www.youtube.com/embed/0mjj1NJdTb0"
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

export default PrWhatsAppEn;
