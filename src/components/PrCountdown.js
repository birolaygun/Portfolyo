import React from "react";
import todo from "../galery/todo.gif";

const PrCountdown = () => {
  return (
    <div>
      <div className="prproject">
        <h1>Countdown To Do</h1>
        <div className="img imgPr">
          <img src={todo} alt="" />
        </div>
        <div className="links">
          <h3>
            Sitenin Linki:{" "}
            <a href="https://countdown-todo.netlify.app/">
              countdown-todo.netlify.app
            </a>
          </h3>
          <h3>
            Github Linki:{" "}
            <a href="https://github.com/birolaygun/ToDoListWithCountdown">
              github.com/birolaygun/ToDoListWithCountdown
            </a>
          </h3>
        </div>

        <p>
          React ile geliştirdiğim ilk projelerden birisidir. JavaScript öğrenen
          çoğu kişi <b>To Do</b> projesini yapmıştır. Ben ise bu projeyi farklı
          şekilde yapmak istedim ve yapılacaklar listesine zaman sınırlaması
          koydum.
        </p>
        <p>
          <b>Context</b> de kullandığım bu projede yapılacaklar listesine görev
          eklerken bir de nepılması gerektiğini de girmeniz gerekiyor. Görevi
          başarıyla ekleyince geri sayım başlıyor. Zaman bitmeden görevi
          tamamlarsanız görev <b>Tamamlanan Görevler</b> menüsüne ekleniyor.
          Süre bitmeden iptal ederseniz <b>İptal Edilenler</b> menüsüne
          ekleniyor. Eğer süre biterse <b>Kaçanlar</b> menüsüne ekleniyor. Bu
          menüleri gezerek yaptığınız, kaçırdığınız ve iptal ettiğiniz görevleri
          görebiliyorsuunuz.
        </p>
        <iframe

          src="https://www.youtube.com/embed/9bzpiLqYDaM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default PrCountdown;
