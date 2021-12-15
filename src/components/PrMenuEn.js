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
            Siten's Link:{" "}
            <a href="https://left-sidebar-menu.netlify.app/">
              https://left-sidebar-menu.netlify.app/
            </a>
          </h3>
          <h3>
            Github Link:{" "}
            <a href="https://github.com/birolaygun/Side-Bar-Menu">
              https://github.com/birolaygun/Side-Bar-Menu
            </a>
          </h3>
        </div>
        <p>
          Here is a menu that you can take and adapt to your own website. It
          provides easy use with the dropdown feature in Dropdow. Editing the
          contents of the menu is very easy. You can create your menu by editing
          the arrays in the Data.js file.
        </p>
      </div>
    </div>
  );
};

export default PrMenuEn;
