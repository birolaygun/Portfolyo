import React from "react";
import stok from "../galery/stok.gif";

const PrStok = () => {
  return (
    <div>
      <div className="prproject">
        <h1>Stok Takip</h1>
        <div className="img imgPr">
          <img src={stok} alt="" />
        </div>
        <div className="links">
          <h3>
            Sitenin Linki:{" "}
            <a href="https://stok-takip.netlify.app">stok-takip.netlify.app</a>
          </h3>
          <h3>
            Github Linki:{" "}
            <a href="https://github.com/birolaygun/Stok-Takip">
              github.com/birolaygun/Stok-Takip
            </a>
          </h3>
        </div>
        <ul>
          <b>
            {" "}
            Projemi denemek isterseniz giriş yapmak için gereken bilgiler
            aşağıdadır:
          </b>

          <li>kullanıcı Adı: Admin, şifre: asdfasdf</li>
          <li>kullanıcı Adı: personel1, şifre: asdfasdf</li>
          <li>kullanıcı Adı: personel2, şifre: asdfasdf</li>
          <li>kullanıcı Adı: personel3, şifre: asdfasdf</li>
          <li>kullanıcı Adı: personel4, şifre: asdfasdf</li>
        </ul>
        <p>
          Benim yaptığım en başarılı projem budur. Bu projeyi React ve Redux
          kullanarak geliştirdim. Projemin amacı Depolarda Stok kontrolünü
          sağlamaktır. Bu projede neler yapılabildiğini aşağıya yazıyorum.
        </p>
        <ul>
          <li>
            Depo menüsünde elinizdeki tüm envanterin listetsi ve deponuzda ne
            kadar olduğu yazıyor.
          </li>
          <li>
            Alış menüsüne gelip buradan Alış bilgilerini ekleyerek depoya ürün
            girişi yapılıyor. Alışı yapılan ürünün miktarı Depo menüsünde
            otomatik artıyor.
          </li>
          <li>
            Satış menüsüne gelip buradan Satış bilgilerini ekleyerek depodan
            ürün çıkışı yapılıyor. Çıkışı yapılan ürünün miktarı Depo menüsünde
            otomatik azalıyor.
          </li>
          <li>
            Yaptığınız Alış ve Satışların bilgilerini İşlemler menüsünde
            görebilir ve teker teker üzerlerinde inceleme yapabilirsiniz. bu
            belgeleri silme yetkisi ise sadece Admin'e aittir. Admin bu
            belgelerden birisini sildiği zaman yine depodaki ürünlerin miktarı
            otomatik olarak düzenlenecektir.
          </li>
          <li>
            Admin için özel bir Yetkilendirme menüsü vardır. Buradan bu projeyi
            kullanabilmesi için kullanıcı ekleyebilir ve kullanıcı çıkartabilir.
            ayrıca her kullanıcı için ayrı ayrı yetkilendirme de
            yapabilmektedir.
          </li>
        </ul>
        <div className="ifra">
          <iframe
            src="https://www.youtube.com/embed/NHQqDsnW-hg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>{" "}
        </div>
      </div>
    </div>
  );
};

export default PrStok;
