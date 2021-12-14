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

const ProjectsEn = () => {
  return (
    <div className="myprojects">
      <h1>PROJECTS</h1>
      <p>
        Here I will introduce some of my projects to you. Please click on the
        project you want to review. I especially recommend you to review my{" "}
        <b>Stock-Tracking</b> and <b>Promotion</b> projects.
      </p>
      <div className="allprojects">
        <Link to="/projeler/portfolyo/en/">
          {" "}
          <div className="portfolyo">
            <div className="img">
              <img src={portfolyo} alt="" />
            </div>{" "}
            <h2>Portfolio</h2>{" "}
          </div>
        </Link>

        <Link to="/projeler/tanitim/en/">
          {" "}
          <div className="portfolyo">
            <div className="img">
              <img src={birol} alt="" />
            </div>{" "}
            <h2>Promotion</h2>{" "}
          </div>
        </Link>
        <Link to="/projeler/stok_takip/en/">
          {" "}
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={stok} alt="" />
            </div>{" "}
            <h2>Stock-Tracking</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/projeler/otoban_oto/en/">
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={otoban} alt="" />
            </div>{" "}
            <h2>Otoban Oto</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/projeler/countdown_to_do/en/">
          {" "}
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={todo} alt="" />
            </div>{" "}
            <h2>Countdow To Do</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/projeler/shopping/en/">
          {" "}
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={book} alt="" />
            </div>{" "}
            <h2>Shopping</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/projeler/doviz_hesaplama/en/">
          {" "}
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={döviz} alt="" />
            </div>{" "}
            <h2>Calculate Currency</h2>{" "}
          </div>{" "}
        </Link>
        <Link to="/projeler/ilk_web_sitem/en/">
          {" "}
          <div className="portfolyo">
            {" "}
            <div className="img">
              <img src={ilk} alt="" />
            </div>{" "}
            <h2>My First Website</h2>{" "}
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default ProjectsEn;