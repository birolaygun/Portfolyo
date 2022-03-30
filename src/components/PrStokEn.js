import React from "react";
import stok from "../galery/stok.gif";

const PrStokEn = () => {
  return (
    <div>
      <div className="prproject">
        <h1>Stock-Tracking</h1>
        <div className="img imgPr">
          <img src={stok} alt="" />
        </div>
        <div className="links">
          <h3>
            Site's Link:{" "}
            <a href="https://stok-takip.netlify.app">stok-takip.netlify.app</a>
          </h3>
          <h3>
            Github Link:{" "}
            <a href="https://github.com/birolaygun/Stok-Takip">
              github.com/birolaygun/Stok-Takip
            </a>
          </h3>
        </div>
        <ul>
          <b>
            {" "}
            If you want to try my project, here is the information required to
            login:
          </b>

          <li>user name: Admin, password: asdfasdf</li>
          <li>user name: personel1, password: asdfasdf</li>
          <li>user name: personel2, password: asdfasdf</li>
          <li>user name: personel3, password: asdfasdf</li>
          <li>user name: personel4, password: asdfasdf</li>
        </ul>
        <p>
          I developed this
          project using React and Redux. The purpose of my project is to provide
          Stock control in Warehouses. I write below what can be done in this
          project.
        </p>
        <ul>
          <li>
            In the Warehouse menu, it says list of all the inventory you have
            and how much it is in your warehouse.
          </li>
          <li>
            The product is entered into the warehouse by coming to the Purchase
            menu and adding the Purchase information from there. The amount of
            purchased product increases automatically in the Warehouse menu..
          </li>
          <li>
            The product is exited from the warehouse by coming to the Sales menu
            and adding the Sales information from there. The amount of the
            product that is issued decreases automatically in the Warehouse
            menu.
          </li>
          <li>
            You can see the information of your Purchases and Sales in the
            Transactions menu and you can examine them one by one. The authority
            to delete these documents only belongs to the Admin. When the admin
            deletes one of these documents, the amount of the products in the
            warehouse will be automatically adjusted.
          </li>
          <li>
            There is a special Authorization menu for Admin. From here, this
            project can also authorize separately for each user.
          </li>
        </ul>
        <div className="ifra">
          <iframe
            src="https://www.youtube.com/embed/NHQqDsnW-hg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>{" "}
        </div>
      </div>
    </div>
  );
};

export default PrStokEn;
