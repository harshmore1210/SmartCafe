import React from "react";
import { PRODUCTS } from "./products";
import { Product } from "./Product";
import "./Menu.css";

export const Menu = () => {
  return (
    <>
    
      <section>
    <div className="shop">
      <div className="shopTitle">
        <h1>Smart Cafe</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
      </section>
   
    </>
  );
};
