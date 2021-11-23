import React from "react";
import otoban from "../galery/otoban.gif";

const PrOtoban = () => {
  
  return (
    <div>
      <div className="prproject">
        <h1>Otoban Oto</h1>
        <div className="img imgPr">
          <img src={otoban} alt="" />
        </div>
        <div className="links">
          <h3>
            Sitenin Linki:{" "}
            <a href="https://www.otobanotokaporta.com/">
              www.otobanotokaporta.com
            </a>
          </h3>
          <h3>
            Github Linki:{" "}
            <a href="https://github.com/birolaygun/otoban-oto">
              github.com/birolaygun/otoban-oto
            </a>
          </h3>
        </div>

        <p>
Ticari amaçla yaptığım ilk site budur. Üzerinde çok titiz çalıştım. Responsive tasarıma sahip.
</p>
<p>
    Github'dan beğendiğim bir Navbar'ı kullanarak projemi geliştirdim.
    iframe kullanarak Google Maps üzerinden konum gösterme kullandım.
    Tek dokunuşla İşyeri sahibini arama, whatsupp mesajı gönderme ve navigasyon açma özellikleri ekledim.
    
</p>
      </div>
    </div>
  );
};

export default PrOtoban;
