import "./ProductDetail.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import {
  FaMapMarkerAlt,
  FaTags,
  FaSeedling,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const productFromState = location.state?.product;

  const storedProducts =
    JSON.parse(localStorage.getItem("products")) || [];

  const product =
    productFromState ||
    storedProducts.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <div className="detail-page">
        <h2>محصول پیدا نشد ❌</h2>
      </div>
    );
  }

  // 🗑 DELETE
  const handleDelete = () => {

  Swal.fire({

    title: "آیا مطمئن هستید؟",

    text: "این محصول حذف خواهد شد و قابل بازگشت نیست",

    icon: "warning",

    showCancelButton: true,

    confirmButtonText: "بله، حذف شود",

    cancelButtonText: "انصراف",

    confirmButtonColor: "#c0392b",

    cancelButtonColor: "#1f5e3b",

    direction: "rtl"

  }).then((result) => {


    if (result.isConfirmed) {


      const updated = storedProducts.filter(
        (p) => p.id !== product.id
      );


      localStorage.setItem(
        "products",
        JSON.stringify(updated)
      );



      Swal.fire({

        title: "حذف شد",

        text: "محصول با موفقیت حذف شد",

        icon: "success",

        confirmButtonText: "باشه",

        confirmButtonColor:"#1f5e3b",

        direction:"rtl"

      }).then(()=>{

        navigate("/");

      });


    }


  });

};

  //  EDIT
  const handleEdit = () => {
    navigate("/add-product", {
      state: { product },
    });
  };

  return (
    <div className="detail-page">
      <div className="detail-card">

        <div className="image-box">
          <img src={product.img} alt={product.name} />
        </div>

        <div className="info-box">

          <h1>
            <FaSeedling /> {product.name}
          </h1>

          <div className="meta">
            <span>
              <FaTags /> {product.price} افغانی
            </span>

            <span>
              <FaMapMarkerAlt /> {product.location}
            </span>
          </div>

          <p className="desc">{product.desc}</p>

          <div className="action-buttons">

            <button className="edit-btn" onClick={handleEdit}>
              <FaEdit /> ویرایش
            </button>

            <button className="delete-btn" onClick={handleDelete}>
              <FaTrash /> حذف
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;