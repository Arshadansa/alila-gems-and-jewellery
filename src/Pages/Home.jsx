import React from "react";
import Navbar from "../Compoents/Navbar";
import Footer from "../Compoents/Footer";
import TopContact from "../Compoents/TopContact";
import Main from "../Compoents/Main";
import Category from "../Compoents/Category";
import OurStory from "../Compoents/OurStory";
import OurGallery from "../Compoents/OurGallery";

function Home() {
  return (
    <section className="bg-black overflow-hidden">
      <TopContact />
      <Navbar />
      <Main />
      <Category />
      <OurStory />
      <OurGallery />
      <Footer />
    </section>
  );
}

export default Home;
