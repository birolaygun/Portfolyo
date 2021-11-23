import React from "react";
import ilk from "../galery/ilk.gif";

const Prilk = () => {
  return (
    <div>
      <div className="prproject">
        <h1>İlk Web Sitem</h1>
        <div className="img imgPr">
          <img src={ilk} alt="" />
        </div>
        <div className="links"></div>

        <p>
          FrontEnd öğrenmeye başlayalı henüz <b> 20 gün</b> olmuştu ve ben bu siteyi
          internette yayınladım. Benim için mutluluk verici ve umut dolu bir
          sonuçtu.
        </p>
        <p>
          Hiçbir yerde görmediğim özgün hover effectler ve keyframes'ler
          tasarlamıştım. Malesef o günlerde git - github nedir bilmediğim için
          yazdığım kodları kaydedemedim ve kayboldu gitti. Geriye sadece bu
          video kaldı.
        </p>    
        <div className="ifra">
            <iframe
            src="https://www.youtube.com/embed/fYdxx9rzKF4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>          </div>

      </div>

    </div>
  );
};

export default Prilk;
