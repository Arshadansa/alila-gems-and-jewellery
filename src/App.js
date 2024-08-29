import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Compoents/Layout";
import ScrollToTop from "./Compoents/ScrollToTop";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
