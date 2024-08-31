// src/components/ProductList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import Loading from "../../Compoents/Loading"; // Make sure this path is correct

const ITEMS_PER_PAGE = 20; // Number of items per page

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/carts");
        const allProducts = response.data.carts.flatMap(
          (cart) => cart.products
        );
        setProducts(allProducts);
        // console.log(allProducts);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loading />; // Use your Loading component
  if (error) return <p className="text-white">{error}</p>; // Show error state

  // Calculate pagination
  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate total pages
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  return (
    <section className="max-w-screen-xl flex mx-auto  ">
      <div className="w-1/3  text-white">Filter will be intergrated soon..</div>
      <div className="w-3/3 text-white">
        <div className="product-list w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {currentProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div className="pagination w-full text-white flex justify-center items-center mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded mx-2"
          >
            Previous
          </button>
          <span className="mx-4">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded mx-2"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
