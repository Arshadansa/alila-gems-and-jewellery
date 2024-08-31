import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../Context/cartContext";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    if (product) {
      // Add product to cart with the specified quantity
      addToCart({ ...product, quantity });
    }
  };

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p className="text-white">Product not found.</p>;

  

  const handleCheckout = () => {
    navigate("/cart");
  };

  return (
    <section className="max-w-screen-xl flex min-h-screen mx-auto p-6">
      <div className="w-1/3 text-white">Filter will be intergrated soon..</div>
      <div className="bg-black w-2/3 border border-gray-800 rounded-lg overflow-hidden shadow-lg p-6 text-white">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <p className="text-gray-400 mb-2">
              Price: ${product.price?.toFixed(2)}
            </p>
            <p className="text-gray-400 mb-2">
              Available Quantity: {product.quantity}
            </p>
            <p className="text-gray-400 mb-2">
              Discount: {product.discountPercentage?.toFixed(2)}%
            </p>
            <p className="mb-2">Total: ${product.total?.toFixed(2)}</p>
            <p className="text-green-400 mb-4">
              Discounted Total: ${product.discountedTotal?.toFixed(2)}
            </p>
            <div className="flex items-center mb-4">
              <button
                onClick={handleDecrease}
                className="border px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 rounded-l-lg"
              >
                -
              </button>
              <span className="border-t border-b border-gray-800 px-4 py-2 text-white">
                {quantity}
              </span>
              <button
                onClick={handleIncrease}
                className="border px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 rounded-r-lg"
              >
                +
              </button>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="border px-6 py-2 bg-black text-white hover:bg-gray-800 rounded-lg"
              >
                Add to Cart
              </button>
              <button
                onClick={handleCheckout}
                className="border px-6 py-2 bg-black text-white hover:bg-gray-800 rounded-lg"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
