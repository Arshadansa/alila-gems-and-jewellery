import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Context/cartContext"; // Import the CartProvider
import Layout from "./Compoents/Layout";
import ScrollToTop from "./Compoents/ScrollToTop";
import Loading from "./Compoents/Loading";
import SingleProduct from "./Pages/Collections/SingleProduct";
import Cart from "./Pages/Carts/Cart";
import CartPopup from "./Compoents/CartPopup";
import Navbar from "./Compoents/Navbar";
import Checkout from "./Payment/Checkout";

const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const Login = React.lazy(() => import("./Pages/Account/Login"));
const SignUp = React.lazy(() => import("./Pages/Account/SignUp"));
const ForgotPassword = React.lazy(() =>
  import("./Pages/Account/ForgotPassword")
);
const ProductList = React.lazy(() => import("./Pages/Collections/ProductList"));

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/account/login" element={<Login />} />
              <Route path="/account/signup" element={<SignUp />} />
              <Route
                path="/account/forgotpassword"
                element={<ForgotPassword />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/collections/rings" element={<ProductList />} />
              <Route
                path="/collections/rings/product/:id"
                element={<SingleProduct />}
              />
               <Route
                path="/checkout"
                element={<Checkout />}
              />

            </Route>
          </Routes>
        </React.Suspense>
      </Router>
      <CartPopup />
    </CartProvider>
  );
}

export default App;
