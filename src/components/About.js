import React from "react";
import brl from "../Brl.jpg";

const About = () => {
  return (
    <div className="aboutme">
      <h1>HAKKIMDA</h1>
      <div className="img">
        <img src={brl} alt="" />
      </div>
      <div className="introduction">
        <h2>Birol AYGÜN Kimdir ?</h2>
        <p>
          22/11/1987 tarihinde Ankara'da doğdum. Babam işçi annem ise ev
          hanımıydı. Çocoklugum Kazan ilçesinde geçti ve İlköğretim Eğitimimi{" "}
          <b>Şahin İlköğretim Okulu</b> 'nda tamamladım.
        </p>
        <h2>Eğitim Hayatım</h2>
        <p>
          {" "}
          2002 yılında girdiğim <b>Etimesgut Anadolu Lisesi</b>'ni 2006 yılında
          bitirdim. 2007 yılında <b>ODTÜ</b> Fen Bilgisi Öğretmenliği bölümüne
          yerleştim. 2008 yılında üniversiteden ayrıldım ve eğitim hayatıma ara
          verdim. 2021 Yılında <b>Anadolu Üniversitesi</b> Web Tasarımı ve
          Kodlama bölümünü kazandım ve devam ediyorum.
        </p>

        <h2>FrontEnd İle Tanışmam</h2>
        <p>
          {" "}
          Front End Developer olarak çalışan arkadaşım sayesinde bu meslekle
          tanıştım. Araştırmalarım sonrasında Front End üzerine kendimi
          geliştirmeye karar verdim. Bilgisayar konusunda var olan bilgi ve
          birikimime de güvenerek <b>Udemy</b> üzerinden eğitimime başladım.
          Sayısalcı olmamın ve analitik düşünebilme yeteneğimi kullanabilmemin
          bana verdiği motivasyon ile keyif alarak hızlı bir şekilde eğitimimi
          tamamladım. Eğitimime başlayalı henüz 20 gün olmuştu ki ilk sitemi
          internette yayınlamıştım bile. Daha sonra birçok proje ve yayınladığım
          siteler ile tecrübemi arttırdım.{" "}
        </p>
        <h2>Hobilerim</h2>
        <p>
          Futbol, basketbol, masa tenisi ve yüzme hobilerimdir. Ayrıca
          <b>Akvaryum</b> çok keyifli bir hobidir ve başlayanların bırakması çok
          zordur. Şu an bitkili akvaryumumda melek ve transgenetik tetra balığı
          besliyorum.
        </p>
      </div>
    </div>
  );
};

export default About;
