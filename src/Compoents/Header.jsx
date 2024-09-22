import React from "react";
import TopContact from "./TopContact";
import Navbar from "./Navbar";

function Header() {
  return (
    <section className="hidden md:block">
      <TopContact />
    </section>
  );
}

export default Header;
