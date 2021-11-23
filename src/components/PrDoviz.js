import React from "react";
import döviz from "../galery/döviz.gif";

const PrDoviz = () => {
  
  return (
    <div>
      <div className="prproject">
        <h1>Döviz Hesaplama</h1>
        <div className="img imgPr">
          <img src={döviz} alt="" />
        </div>
        <div className="links">
          <h3>
            Sitenin Linki:{" "}
            <a href="https://dovizhesapla.netlify.app">
              dovizhesapla.netlify.app
            </a>
          </h3>
          <h3>
            Github Linki:{" "}
            <a href="https://github.com/birolaygun/Guncel_Doviz_Hesapla">
              github.com/birolaygun/Guncel_Doviz_Hesapla
            </a>
          </h3>
        </div>

        <p>
          JavaScript ile geliştirdiğim ilk projelerden birisi. <b>Fetch</b> ile{" "}
          <b>Get Request </b> yaparak güncel döviz kuru üzerinden hesaplama
          yapılabiliyor. Api adresi{" "}
          <small>
            http://api.exchangeratesapi.io/v1/latest?access_key=28c70045d4518c03b26a5a75eb86ded6&format=1
          </small>
          <br />
          Projemi Deploy edince Api'dan veri geçişine izin verilmediği için
          çalışmadı. Eğer sizler bu projeyi çalıştırmak isterseniz projeyi
          bilgisayarınıza klonlamanız ve Local Host üzerinden çalıştırmanız
          gerekmektedir.
        </p>
        <p>
          Youtube videosunu izlerseniz Local Host'da nasıl çalıştığını
          görebilirsiniz.
        </p>
        <div className="ifra">

        <iframe
          src="https://www.youtube.com/embed/bW9eQJyI_8s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>        </div>

      </div>
    </div>
  );
};

export default PrDoviz;
