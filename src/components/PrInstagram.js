import React from "react";
import insta from "../galery/insta.gif";

const PrInstagram = () => {
  return (
    <div>
      <div className="prproject">
        <h1>İnstagram</h1>
        <div className="img imgPr">
          <img src={insta} alt="" />
        </div>
        <div className="links">
          <h3>
            Sitenin Linki:{" "}
            <a href="https://cloned-instagram.netlify.app">
              cloned-instagram.netlify.app
            </a>
          </h3>
          <h3>
            Github Linki:{" "}
            <a href="https://github.com/birolaygun/Instagram-Clone">
              github.com/birolaygun/Instagram-Clone
            </a>
          </h3>
        </div>
        <p>
          <b>
            React, Next.Js, Recoil, Firebase, Google Authenticator, Tailwing
          </b>{" "}
          kullanarak İnstagram'ı klonladım. Tabiki 100% değil ama arayüz birebir
          aynı.
        </p>
        <p>
          Bu sitede;
          <ul>
            <li className="fs-5 fw-bold mt-2">Google İle Giriş Yapma</li>
            <li className="fs-5 fw-bold">Fotograf Ekleme</li>
            <li className="fs-5 fw-bold">Yorum Yapma</li>
            <li className="fs-5 fw-bold">Beğeni atma</li>
          </ul>
          özellikleri mevcut. Yaptığınız işlemler
          <b> Google Firebase</b> ile tutulduğu için sayfada kalıcı olarak
          duruyor. Sayfayı yenileseniz de kaybolmuyor.
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

export default PrInstagram;
