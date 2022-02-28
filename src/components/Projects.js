import React from "react";
import birol from "../galery/birol.gif";
import book from "../galery/book.gif";
import döviz from "../galery/döviz.gif";
import ilk from "../galery/ilk.gif";
import otoban from "../galery/otoban.gif";
import portfolyo from "../galery/portfolyo.gif";
import stok from "../galery/stok.gif";
import todo from "../galery/todo.gif";
import police from "../galery/police.gif";
import menu from "../galery/menu.gif";
import currency from "../galery/currency.gif";
import insta from "../galery/insta.gif";
import glomil from "../galery/glomil.gif";

import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="myprojects">
      <h1>PROJELER</h1>
      <p>
        Burada projelerimden bağzılarını sizlere tanıtacağım. Lütfen incelemek
        istediğiniz projemin üzerine tıklayınız. Özellikle <b>Stok-Takip</b> ve{" "}
        <b>Tanıtım</b> projelerimi incelemenizi öneririm.
      </p>
      <div className="allprojects">
        <Link to="/projeler/currency/">
          {" "}
          <div className="portfolyo">
            <div className="img">
              <img src={currency} alt="" />
            </div>{" "}
            <h2>Döviz Kurları</h2>{" "}
          </div>
        </Link>
        <Link to="/projeler/instagram/">
          {" "}
          <div className="portfolyo">
            <div className="img">
              <img src={insta} alt="" />
            </div>{" "}
            <h2>İnstagram</h2>{" "}
          </div>
        </Link>

        <Link to="/projeler/glomil/">
          {" "}
          <div className="portfolyo">
            <div className="img">
              <img src={glomil} alt="" />
            </div>{" "}
            <h2>Glomil</h2>{" "}
          </div>
        </Link>

        <Link to="/projeler/portfolyo/">
          {" "}
          <div className="portfolyo">
            <div className="img">
              <img src={portfolyo} alt="" />
            </div>{" "}
            <h2>Portfolyo</h2>{" "}
          </div>
        </Link>

        <Link to="/projeler/tanitim/">
          {" "}
          <div className="portfolyo">
            <div className="img">
              <img src={birol} alt="" />
            </div>{" "}
            <h2>Tanıtım</h2>{" "}
          </div>
        </Link>
        <Link to="/projeler/stok_takip/">
          {" "}
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={stok} alt="" />
            </div>{" "}
            <h2>Stok-Takip</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/projeler/policeCar/">
          {" "}
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={police} alt="" />
            </div>{" "}
            <h2>Polis Arabası</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/projeler/menu/">
          {" "}
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={menu} alt="" />
            </div>{" "}
            <h2>Menu</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/projeler/otoban_oto/">
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={otoban} alt="" />
            </div>{" "}
            <h2>Otoban Oto</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/projeler/countdown_to_do/">
          {" "}
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={todo} alt="" />
            </div>{" "}
            <h2>Countdow To Do</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/projeler/shopping/">
          {" "}
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={book} alt="" />
            </div>{" "}
            <h2>Shopping</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/projeler/doviz_hesaplama/">
          {" "}
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={döviz} alt="" />
            </div>{" "}
            <h2>Döviz Hesapla</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/projeler/ilk_web_sitem/">
          {" "}
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={ilk} alt="" />
            </div>{" "}
            <h2>İlk Web Sitem</h2>{" "}
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Projects;
