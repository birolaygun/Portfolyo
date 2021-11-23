import React from "react";
import book from "../galery/book.gif";

const PrShopping = () => {
  
  return (
    <div>
      <div className="prproject">
        <h1>Shopping</h1>
        <div className="img imgPr">
          <img src={book} alt="" />
        </div>
        <div className="links">
          <h3>
            Sitenin Linki:{" "}
            <a href="https://book-shopping.netlify.app/">
              book-shopping.netlify.app
            </a>
          </h3>
          <h3>
            Github Linki:{" "}
            <a href="https://github.com/birolaygun/Book-Shopping-With-Context-">
              github.com/birolaygun/Book-Shopping-With-Context-
            </a>
          </h3>
          <h3>
            Github Linki:{" "}
            <a href="https://github.com/birolaygun/Book-Shopping-With-Redux">
              github.com/birolaygun/Book-Shopping-With-Redux
            </a>
          </h3>
        </div>

        <p>
          Bu projeyi HTML, CSS, BootStrap, JavaScript ve Context kullanarak
          geliştirdim. Aynı projeyi Context yerine Redux kullanarak da yaptığım
          için onun da linkini yukarıya bıraktım.
        </p>
        <p>
          Küçük bir <b>e-ticaret</b>  sitesi niteliğindedir. Anasayfada bulunan
          kitaplardan <b>"Sepete Ekle"</b>  seçeneği ile sepetinize ekliyorsunuz.
          Sepetinize gittiğiniz zaman sepete eklemiş olduklarınızı görüyor,
          ürünün sayısını buradan arttırıp azaltabiliyor veya ürünü sepetten
          çıkarta biliyorsunuz. Ürünlerin <b>toplam fiyatını</b>  ve aynı zamanda ayrı
          ayrı fiyatlarını görebiliyorsunuz.{" "}
        </p>
      </div>
    </div>
  );
};

export default PrShopping;
