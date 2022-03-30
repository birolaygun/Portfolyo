import React from "react";
import ws from "../galery/wsEkran.gif";

const PrWhatsApp = () => {
  return (
    <div>
      <div className="prproject">
        <h1>WhatsApp</h1>
        <div className="img imgPr">
          <img src={ws} alt="" />
        </div>
        <div className="links">
          <h3>
            Sitenin Linki:{" "}
            <a href="https://whatsapq.netlify.app/">whatsapq.netlify.app/</a>
          </h3>
          <h3>
            Github Linki:{" "}
            <a href="https://github.com/birolaygun/WhatsApp">
              github.com/birolaygun/WhatsApp
            </a>
          </h3>
        </div>
        <b className="desci">
          {" "}
          Bu projeyi Next.js, TailWind, Redux ve fireStore kullanarak
          geliştirdim.
        </b>
        <ul>
          <br />

          <li>Giriş Google Authentication ile yapılıyor</li>
          <li>+ butonuna basarak e-mail adresi ile kişi ekleniyor</li>
          <li>Daha sonra WhatsApp gibi yazışmaya başlıyorsunuz</li>
          <li>Resim, müzik, video ve dosya gönderebilirsiniz.</li>
          <li>
            + butonuna basıp "birolaygun.bilisim@gmail.com" hesabını ekleyerek
            bana selam verebilirsiniz
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

export default PrWhatsApp;
