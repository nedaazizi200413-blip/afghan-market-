import "./Favorite.css";
import { FaHeart, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaTags } from "react-icons/fa";
const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(data);
  }, []);

  const removeItem = (id) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="favorites-page">

      {/* HEADER */}
      <div className="fav-header">
        <FaHeart className="heart-icon" />
<h1 style={{ color: "#27ae60", fontSize: "20px" }}>
  محصولات مورد علاقه
</h1>

      </div>

      {/* EMPTY STATE */}
      {favorites.length === 0 ? (
        <div className="empty">
         
          <h2>هیچ محصولی اضافه نشده</h2>
          <p>محصولات مورد علاقه اینجا نمایش داده می‌شود</p>
        </div>
      ) : (
        <div className="fav-grid">

          {favorites.map((item) => (
            <div key={item.id} className="fav-card">

             <div className="fav-img-box">

           <img src={item.img} alt={item.name} />

            <div className="fav-heart">
                      <FaHeart className="heart-i" />
         </div>

        </div>
                              
              <div className="fav-body">

                <h3>{item.name}</h3>

              <p className="price">
          <FaTags className="icon" />
          {item.price} افغانی
         </p>

          <p className="location">
        <FaMapMarkerAlt className="icon" />
      {item.location}
     </p>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  <FaTrash /> حذف
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Favorites;