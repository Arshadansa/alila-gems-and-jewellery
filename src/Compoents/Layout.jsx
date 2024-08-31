import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow mt-28 mb-24">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
