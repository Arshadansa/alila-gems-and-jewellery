import React from 'react';
import { useCart } from '../../Context/cartContext'; // Make sure to import the useCart hook

const CartItem = ({ item, removeFromCart }) => {
  const { addToCart } = useCart(); // Get addToCart from useCart hook

  const handleIncrease = () => {
    addToCart({ ...item, quantity: 1 }); // Increase quantity by 1
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      addToCart({ ...item, quantity: -1 }); // Decrease quantity by 1
    } else {
      removeFromCart(item.id); // Remove item if quantity is 1
    }
  };

  return (
    <div className="cart-item flex items-center justify-between p-4 border-b border-gray-200">
      <div>
        <p className="font-semibold text-lg leading-10 text-white">{item.title}</p>
        <p className="text-md text-gray-600">
          {item.quantity} x ${item.price} = ${(item.quantity * item.price).toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handleDecrease}
          aria-label={`Decrease quantity of ${item.title}`}
          className="px-2 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
        >
          -
        </button>
        <span className="text-sm text-white">{item.quantity}</span>
        <button
          onClick={handleIncrease}
          aria-label={`Increase quantity of ${item.title}`}
          className="px-2 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          aria-label={`Remove ${item.title} from cart`}
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
