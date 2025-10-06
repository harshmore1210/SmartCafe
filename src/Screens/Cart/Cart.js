import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { PRODUCTS } from "../Menu/products";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from 'axios';

import "./Cart.css";
import StripeCheckout from "react-stripe-checkout";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [payNow , setPayNow] = useState(false);

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/sign-up");
    fetchUserName();
  }, [user, loading]);

  const handleClick = () => {
      if(user) {
        setPayNow(true);
      } else {
        alert('Please Login to Checkout');
      }
  };

  const payment = (token) => {
      axios.post("http://localhost:5000/pay", {
      amount : totalAmount * 100,
      token : token,
    });
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p style={{color: "white"}}> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/menu")}> Order More </button>
          <button onClick={handleClick}>
            Checkout
          </button>
            {
              payNow && <div className="w-full d-flex items-center justify-center mt-6"> 
              <StripeCheckout
              stripeKey="pk_test_51N1kqRSDJzjkkizZJhpYfTcI7jiUJikZosxg2oJoqKynhge4OyeamrQ6u0QZIVdvLlgCrXXkRw8Fce0hqBVksFpE00zFslrbzd"
              name="Smart cafe"
              amount={totalAmount * 100}
              label="Pay To Cafe"
              description={`Your Payment amount is $${totalAmount}`}
              token={payment}
              email={user.email}
              /> </div>
            }
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
