import React from "react";
import menu from "../galery/menu.gif";

const PrMenuEn = () => {
  return (
    <div>
      <div className="prproject">
        <h1>Menu</h1>
        <div className="img imgPr">
          <img src={menu} alt="" />
        </div>
        <div className="links">
          <h3>
            Siten Linki:{" "}
            <a href="https://left-sidebar-menu.netlify.app/">
              https://left-sidebar-menu.netlify.app/
            </a>
          </h3>
          <h3>
            Github Linki:{" "}
            <a href="https://github.com/birolaygun/Side-Bar-Menu">
              https://github.com/birolaygun/Side-Bar-Menu
            </a>
          </h3>
        </div>
        <p>
          Buradan alıp kendi internet sitenize uyarlayabileceğiniz bir menu.
          Dropdow içinde dropdown özelliği ile kolay kullanım sağlıyor. menünün
          içeriğini düzenlemek ise çok kolay. Data.js dosyasında array'ler
          üzerinde düzenleme yaparak menünüzü oluşturabilirsiniz.
        </p>
      </div>
    </div>
  );
};

export default PrMenuEn;
