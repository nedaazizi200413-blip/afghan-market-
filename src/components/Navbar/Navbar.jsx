import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const isLoggedIn = localStorage.getItem("auth") === "true";

  const logout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <div className="logo">🌾 Afghan Market</div>

<ul className={`nav-links ${open ? "active" : ""}`}>
  <li>
    <Link to="/">Home</Link>
  </li>

  <li>
    <Link to="/add-product">Add Product</Link>
  </li>

  <li>
    <Link to="/about">About</Link>
  </li>

  <li>
    <Link to="/contact">Contact</Link>
  </li>

  <li>
    <Link to="/favorites">Favorites</Link>
  </li>

  <li>
    <Link to="/cart">Cart</Link>
  </li>

  <li>
    {isLoggedIn ? (
      <button className="login-btn" onClick={logout}>
        Logout
      </button>
    ) : (
      <Link to="/login">
        <button className="login-btn">Login</button>
      </Link>
    )}
  </li>
</ul>

      <div
        className="menu-icon"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;