import React from "react";
import currency from "../galery/currency.gif";


const Currency = () => {
  
  return (
    <div>
      <div className="prproject">
        <h1>Döviz Kurları</h1>
        <div className="img imgPr">
          <img src={currency} alt="" />
        </div>
        <div className="links">
          <h3>
            Sitenin Linki:{" "}
            <a href="https://currency-convert-now.netlify.app/">
            currency-convert-now.netlify.app
            </a>
          </h3>
          <h3>
            Github Linki:{" "}
            <a href="https://github.com/birolaygun/CurrencyConvert">
            github.com/birolaygun/CurrencyConvert
            </a>
          </h3>
        </div>
        <ul>
          <li>Güncel verilerle anlık bütün Döviz kurları üzerinde hesaullamalar yapmanızı sağlayan</li>
          <li>Çizgi grafik ile 2020 yılından itibaren kur değerlerini görebileceğiniz</li>
          <li>Son 30 ve son 90 günün istatistik bilgilerine erişebileceğiniz</li>
          <li>Değer kaybını ve değer artışını oransal olarak veren </li>
        bir proje
        
        </ul>
        <p>
          Next ve Tailwind kullanarak hazırladığım bu site kusursuz responsive görünüme sahip. Özellikle bir kütüphaneden aldığım Line Chart çok beğeni aldı.
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

export default Currency;
