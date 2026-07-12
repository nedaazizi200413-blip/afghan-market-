import "./Cart.css";
import { useState, useEffect } from "react";
import { FaTrash, FaShoppingCart, FaBoxOpen, FaTag } from "react-icons/fa";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page">

      {/* HEADER */}
      <div className="cart-header">
        <FaShoppingCart className="cart-icon" style={{ marginLeft: "110px" }} />
<h1 style={{ color: "#c5c5c5", fontSize: "20px", textAlign: "center", marginLeft: "0px" }}>سبد خرید</h1>


      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <FaBoxOpen className="empty-icon" />
          <p>سبد خرید خالی است</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-card">

              <img src={item.img} alt={item.name} />

              <div className="cart-info">

                <h3>{item.name}</h3>

                <p className="price">
                  <FaTag className="icon" />
                  {item.price} افغانی
                </p>

                <p>تعداد: {item.qty}</p>

                <p>مجموع: {item.price * item.qty} افغانی</p>

                <button onClick={() => removeItem(item.id)}>
                  <FaTrash /> حذف
                </button>

              </div>

            </div>
          ))}

          <div className="total"  style={{ marginRight: "60px" }}>
            مجموع کل: {total} افغانی
          </div>
        </>
      )}

    </div>
  );
};

export default Cart;