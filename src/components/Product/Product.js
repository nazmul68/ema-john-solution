import React from "react";
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ addToCartHandler, product }) => {
  //   const { addToCartHandler, product } = props;
  const { name, img, price, seller, ratings, id } = product;
  // console.log(product, addToCartHandler);
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p c>price: ${price}</p>
        <p>
          <small>Manufacturer :{seller}</small>
        </p>
        <p>
          <small>rating: {ratings} star</small>
        </p>
      </div>
      <button
        className="button-addToCart"
        onClick={() => addToCartHandler(product)}
      >
        <p>Add to cart</p>
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Product;
