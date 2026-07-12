import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import AddProduct from "./pages/AddProduct/AddProduct";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Favorites from "./pages/Favorite/Favorite";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Product Detail */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Add / Edit Product */}
        <Route
  path="/add-product"
  element={
    <ProtectedRoute>
      <AddProduct />
    </ProtectedRoute>
  }
/>

        {/* Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Extra pages */}
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
      
      <Footer />

    </BrowserRouter>
  );
}

export default App;






