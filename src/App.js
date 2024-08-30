import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Compoents/Layout";
import ScrollToTop from "./Compoents/ScrollToTop";
import Contact from "./Pages/Contact";
import Login from "./Pages/Account/Login";
import SignUp from "./Pages/Account/SignUp";
import ForgotPassword from "./Pages/Account/ForgotPassword";
import Cart from "./Pages/Carts/Cart";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/signup" element={<SignUp />} />
          <Route path="/account/forgotpassword" element={<ForgotPassword />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
