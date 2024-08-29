import React from "react";
import Navbar from "../Compoents/Navbar";
import Footer from "../Compoents/Footer";
import TopContact from "../Compoents/TopContact";
import Main from "../Compoents/Main";
import Category from "../Compoents/Category";
import OurStory from "../Compoents/OurStory";
import OurGallery from "../Compoents/OurGallery";
import ProductList from "../Compoents/ProductList";

function Home() {
  return (
    <section className="">
      <Main />
      <Category />
      <OurStory />
      <OurGallery />
      <ProductList />
    </section>
  );
}

export default Home;
