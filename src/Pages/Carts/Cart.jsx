// src/components/Cart.js
import React, { useMemo } from "react";
import { useCart } from "../../Context/cartContext";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = useMemo(() => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  }, [cart]);

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart p-4 max-w-screen-xl mx-auto  shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="w-full flex flex-col items-center justify-center ">
          <p className="text-red-400 text-2xl">Your cart is empty</p>
          <Link to="/collections/rings">
            <p className="text-blue-400">Continue Shopping</p>
          </Link>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}
          <h3 className="text-xl font-semibold mt-4">Total: ${totalPrice}</h3>
          <div className="w-full flex  justify-between">
            <button
              onClick={clearCart}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              className="mt-4 ml-3 origin-right px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              CheckOut
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
