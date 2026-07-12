import "./Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/Images/Images/img1/img1/hero.png";
import img1 from "../../assets/Images/Images/2.jpg";
import img2 from "../../assets/Images/Images/17.jpg";
import img3 from "../../assets/Images/Images/36.jpg";
import img4 from "../../assets/Images/Images/227.jpg";
import img5 from "../../assets/Images/Images/24.jpg";
import {
  FaSearch,
  FaSeedling,
  FaMapMarkerAlt,
  FaTags,
  FaShoppingCart,
  FaHeart,
  FaInfoCircle,
  FaLeaf,
} from "react-icons/fa";

const Home = () => {
  const [search, setSearch] = useState("");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  // محصولات ثابت
  const products = [
    {
      id: 1,
      name: "افغان برنج",
      price: 120,
      location: "کابل",
      img: img1,
    },
    {
      id: 2,
      name: "انگور قندهار",
      price: 80,
      location: "قندهار",
      img: img2,
    },
    {
      id: 3,
      name: "سیب بدخشان",
      price: 60,
      location: "بدخشان",
      img: img3,
    },
    {
      id: 4,
      name: "گندم هرات",
      price: 50,
      location: "هرات",
      img: img4,
    },
    {
      id: 5,
      name: "بادام بامیان",
      price: 200,
      location: "بامیان",
      img: img5,
    },
  ];

  // محصولات ذخیره شده
  const stored =
    JSON.parse(localStorage.getItem("products")) || [];

  // ترکیب
  const allProducts = [...products, ...stored];

  // سرچ
  const filtered = allProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // افزودن به سبد
  const addToCart = (product) => {
    let oldCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existing = oldCart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      existing.qty += 1;
    } else {
      oldCart.push({ ...product, qty: 1 });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(oldCart)
    );

    setCart([...oldCart]);
  };

  // علاقه‌مندی
  const addToFavorites = (product) => {
    let oldFav =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = oldFav.find(
      (item) => item.id === product.id
    );

    if (!exists) {
      oldFav.push(product);

      localStorage.setItem(
        "favorites",
        JSON.stringify(oldFav)
      );

      setFavorites(oldFav);
    }
  };

  return (
    <div className="home">

      {/* HERO */}
    <div className="hero">

  <img
    src={heroImg}
    alt="Agro Market"
    className="hero-image"
  />

  <div className="hero-overlay"></div>

  <div className="hero-content">

    <FaLeaf className="hero-icon" />

    <div className="favorite-icon">
      <FaHeart />
      <span>{favorites.length}</span>
    </div>

    <h1>Afghan Agro Market</h1>

    <p>
      بازار آنلاین محصولات زراعتی افغانستان
    </p>

    <div className="search-box">
      <FaSearch className="icon" />

      <input
        type="text"
        placeholder="جستجوی محصول..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

    </div>

  </div>

</div>

      {/* FEATURES */}
      <div className="features">

        <div className="feature-card">
          <FaMapMarkerAlt />
          <h3>از تمام ولایت‌ها</h3>
        </div>

        <div className="feature-card">
          <FaSeedling />
          <h3>محصولات تازه</h3>
        </div>

        <div className="feature-card">
          <FaTags />
          <h3>قیمت مناسب</h3>
        </div>

      </div>

      {/* TITLE */}
      <h2 className="title">
        <FaShoppingCart /> محصولات
      </h2>

      {/* PRODUCTS */}
      <div className="products">

        {filtered.map((item) => (
          <div key={item.id} className="card">

            <img src={item.img} alt={item.name} />

            <div className="card-body">

              <h3>
                <FaSeedling />
                {item.name}
              </h3>

              <p>
                <FaTags /> {item.price} افغانی
              </p>

              <p>
                <FaMapMarkerAlt />
                {item.location}
              </p>

              <div className="actions">

                <button
                  className="buy"
                  onClick={() =>
                    addToCart(item)
                  }
                >
                  <FaShoppingCart /> خرید
                </button>

                <button
                  className="fav"
                  onClick={() =>
                    addToFavorites(item)
                  }
                >
                  <FaHeart /> علاقه
                </button>

                {/* ✅ مهم‌ترین اصلاح اینجاست */}
                <Link
                  to={`/product/${item.id}`}
                  state={{ product: item }}
                >
                  <button className="info">
                    <FaInfoCircle /> جزئیات
                  </button>
                </Link>

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;