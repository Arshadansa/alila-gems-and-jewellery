
import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/collections/rings/product/${product.id}`); 
    
  };
  
  return (
    <div onClick={handleNavigate} className="product-card hover:cursor-pointer bg-black border border-gray-800 rounded-lg overflow-hidden shadow-lg relative group">
      <img
        
        src={product.thumbnail}
        alt={product.title}
        className="w-full relative  object-cover transition-opacity duration-300"
      />
      <div className="absolute inset-0  bg-gray-900 bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <h2 className="text-white text-md font-bold mb-2">{product.title}</h2>
        <p className="text-gray-400">Price: ${product.price.toFixed(2)}</p>
        <p className="text-gray-400">Quantity: {product.quantity}</p>
        <p className="text-gray-400">Discount: {product.discountPercentage.toFixed(2)}%</p>
        <p className="text-white">Total: ${product.total.toFixed(2)}</p>
        <p className="text-green-400">Discounted Total: ${product.discountedTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Product;
