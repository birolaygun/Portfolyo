import React from "react";
import birol from "../galery/birol.gif";
import book from "../galery/book.gif";
import döviz from "../galery/döviz.gif";
import ilk from "../galery/ilk.gif";
import otoban from "../galery/otoban.gif";
import portfolyo from "../galery/portfolyo.gif";
import stok from "../galery/stok.gif";
import todo from "../galery/todo.gif";
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
        <Link to="/portfolyo">
          {" "}
          <div className="portfolyo">
            <div className="img">
              <img src={portfolyo} alt="" />
            </div>{" "}
            <h2>Portfolyo</h2>{" "}
          </div>
        </Link>

        <Link to="/tanitim">
          {" "}
          <div className="portfolyo">
            <div className="img">
              <img src={birol} alt="" />
            </div>{" "}
            <h2>Tanıtım</h2>{" "}
          </div>
        </Link>
        <Link to="/stok_takip">
          {" "}
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={stok} alt="" />
            </div>{" "}
            <h2>Stok-Takip</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/otoban_oto">
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={otoban} alt="" />
            </div>{" "}
            <h2>Otoban Oto</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/countdown_to_do">
          {" "}
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={todo} alt="" />
            </div>{" "}
            <h2>Countdow To Do</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/shopping">
          {" "}
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={book} alt="" />
            </div>{" "}
            <h2>Shopping</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/doviz_hesaplama">
          {" "}
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={döviz} alt="" />
            </div>{" "}
            <h2>Döviz Hesapla</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/ilk_web_sitem">
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
