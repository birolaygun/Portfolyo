import React from "react";
import glomil from "../galery/glomil.gif";

const PrInstagram = () => {
  return (
    <div>
      <div className="prproject">
        <h1>Glomil</h1>
        <div className="img imgPr">
          <img src={glomil} alt="" />
        </div>
        <div className="links">
          <h3>
            Sitenin Linki:{" "}
            <a href="https://glomil.netlify.app/">glomil.netlify.app</a>
          </h3>
          <h3>
            Github Linki:{" "}
            <a href="https://github.com/birolaygun/Glomil">
              github.com/birolaygun/Glomil
            </a>
          </h3>
        </div>

        <p>
          React <b>TypeScript</b> ile geliştirdiğim bu uygulamada Listenize
          personel ekliyor ve çıkarıyorsunuz. Her personele ait isim, cinsiyet,
          çalıştığı birim, işe giriş tarihi ve işten ayrılış tarihi verileri
          giriliyor.
        </p>
        <p>
          Listenin altında 2 adet grafik var. Birincisi <b>cinsiyete göre</b>{" "}
          işte çalışma sürelerini gösteren grafik, ikincisi ise{" "}
          <b>çalıştığı birime göre </b>
          işte çalışma sürelerini gösteren grafik.
        </p>
        <p>
          Listede yapılan her ekleme ve çıkarma işlemi sonrasında grafik
          harekete geçiyor ve anında güncelleniyor.
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

export default PrInstagram;
