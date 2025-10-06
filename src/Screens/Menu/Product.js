import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
      </div>
      <div class="detail">
        <p style={{ color: "white" , marginRight: "20px"}}> ${price}</p>
        <button className="addToCartBttn" style={{marginLeft: "30px"}} onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};
