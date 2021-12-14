import React from "react";
import book from "../galery/book.gif";

const PrShoppingEn = () => {
  
  return (
    <div>
      <div className="prproject">
        <h1>Shopping</h1>
        <div className="img imgPr">
          <img src={book} alt="" />
        </div>
        <div className="links">
          <h3>
            Site's Linki:{" "}
            <a href="https://book-shopping.netlify.app/">
              book-shopping.netlify.app
            </a>
          </h3>
          <h3>
            Github Link:{" "}
            <a href="https://github.com/birolaygun/Book-Shopping-With-Context-">
              github.com/birolaygun/Book-Shopping-With-Context-
            </a>
          </h3>
          <h3>
            Github Link:{" "}
            <a href="https://github.com/birolaygun/Book-Shopping-With-Redux">
              github.com/birolaygun/Book-Shopping-With-Redux
            </a>
          </h3>
        </div>

        <p>
          I developed this project using HTML, CSS, BootStrap, JavaScript and
          Context. Since I did the same project using Redux instead of Context,
          I left its link above.
        </p>
        <p>
          It is a small <b>e-commerce</b> site. You can add the books to your
          cart with the <b>"Add to Cart"</b> option on the homepage. When you go
          to your cart, you see what you have added to the cart, you can
          increase or decrease the number of products from here, or you can
          remove the product from the cart. You can see the <b>total price</b>{" "}
          of the products as well as the individual prices.{" "}
        </p>
      </div>
    </div>
  );
};

export default PrShoppingEn;
