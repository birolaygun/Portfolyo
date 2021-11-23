import React from "react";
import birol from "../galery/birol.gif";
import speed1 from "../galery/speed1.PNG";
import speed2 from "../galery/speed2.PNG";
import ahrefs1 from "../galery/ahrefs1.PNG";
import ahrefs2 from "../galery/ahrefs2.PNG";
import ahrefs3 from "../galery/ahrefs3.PNG";

const PrTanitim = () => {
  
  return (
    <div>
      <div className="prproject">
        <h1>Tanıtım</h1>
        <div className="img imgPr">
          <img src={birol} alt="" />
        </div>
        <div className="links">
          <h3>
            Sitenin Linki:{" "}
            <a href="https://birolaygunpersonel.netlify.app">
              birolaygunpersonel.netlify.app
            </a>
          </h3>
          <h3>
            Github Linki:{" "}
            <a href="https://github.com/birolaygun/-Personal">
              github.com/birolaygun/-Personal
            </a>
          </h3>
        </div>
        <p>
          İş başvurusunda bulunduğum bir şirket mülakata başlayabilmemiz için
          ödev olarak belli şartların olduğu bir site yapmamı istedi. Onların
          isteği üzerine bu siteyi yaptım. Siteyi onların beklentilerini
          karşıladı ve mülakata çağırıldım.
        </p>
        <p>
          Bu projeyi <b>React</b> {""} kullanarak hazırladım. Başarılı bir{" "}
          <b>responsive</b> tasarımına sahip.
        </p>
        <h2>SEO</h2>
        <p>
          Sitem önde gelen Seo sitelerinden birisi onların{" "}
          <a href="https://ahrefs.com/tr">ahrefs.com</a> 'den{" "}
          <b>90%</b> puan aldı. 10% puanı da 2 tane hata için kırdı. Bu
          hataların nedeni ise "Bağlantınız Gizli Değil" uyarısı nedeniyle
          geliyor. Bunu düzeltebilmek için SSL paketi satın alınması gerekiyor.
          Bu konuyla ilgili gerekli bilgiye{" "}
          <a href="https://www.hostinger.web.tr/rehberler/baglantiniz-gizli-degil/">
            buradan
          </a>{" "}
          ulaşabilirsiniz.{" "}
          <b>
            Yani SSL pakedi satın almış olsam sitem SEO değerlendirmesinde 100%
            puan alacaktı.
          </b>{" "}
          Aşağıdaki fotoğraflar ahrefs'den ekran alıntılarıdır.
        </p>
        <img src={ahrefs1} alt="" />
        <img src={ahrefs2} alt="" />
        <img src={ahrefs3} alt="" />
        <h2>HIZ</h2>
        <p>
          Hız ölçümü için Google PageSpeed Insights kullandım. Sitem <b>
              Masaüstü
          görünümde 98, Mobil görünümde 78 puan aldı </b>
        </p>
        <img src={speed1} alt="" />
        <img src={speed2} alt="" />
      </div>
    </div>
  );
};

export default PrTanitim;
