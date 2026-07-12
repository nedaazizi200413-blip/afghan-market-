import "./AddProduct.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import defaultImage from "../../assets/Images/Images/2.jpg";
import {
  FiPackage,
  FiDollarSign,
  FiMapPin,
  FiImage,
  FiFileText
} from "react-icons/fi";


const AddProduct = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const editProduct = location.state?.product;


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [locationVal, setLocationVal] = useState("");
  const [img, setImg] = useState(defaultImage);
  const [desc, setDesc] = useState("");



  useEffect(() => {

    if (editProduct) {

      setName(editProduct.name || "");
      setPrice(editProduct.price || "");
      setLocationVal(editProduct.location || "");
      setImg(editProduct.img || defaultImage);
      setDesc(editProduct.desc || "");

    }

  }, [editProduct]);


  const handleSubmit = (e) => {
    e.preventDefault();

    let products =
      JSON.parse(localStorage.getItem("products")) || [];

    if (editProduct) {
      const updated = products.map((item) =>
        item.id === editProduct.id

        ? {

            ...item,

            name,
            price,
            location: locationVal,
            img,
            desc

          }

        : item

      );


      localStorage.setItem(
        "products",
        JSON.stringify(updated)
      );

    } else {

      const newProduct = {
        id: Date.now(),
        name,
        price,
        location: locationVal,
        img,
        desc
      };

      products.push(newProduct);


      localStorage.setItem(
        "products",
        JSON.stringify(products)
      );

    }

    Swal.fire({

      title: editProduct
      ? "محصول ویرایش شد"
      : "محصول اضافه شد",

      text: editProduct

      ? "تغییرات محصول با موفقیت ذخیره شد"

      : "محصول جدید با موفقیت به فروشگاه اضافه شد",

      icon: "success",

      confirmButtonText: "مشاهده محصولات",
      confirmButtonColor:"#1f5e3b",
      direction:"rtl"

    })

    .then(()=>{

      navigate("/");

    });


  };

  return (

    <div className="add-page">


      <form
      className="add-form"
      onSubmit={handleSubmit}
      >

        <h2>

          <FiPackage/>

          {editProduct
          ? "ویرایش محصول"
          : "افزودن محصول"}

        </h2>

        <label><FiPackage/> محصول   </label>
        <input

          value={name}

          onChange={(e)=>setName(e.target.value)}

          placeholder=" نام محصول "

          required

        />

        <label><FiDollarSign/> قیمت    </label>

        <input type="number" value={price}

          onChange={(e)=>setPrice(e.target.value)}

          placeholder="قیمت محصول"

          required

        />

        <label> <FiMapPin/> ولایت</label>
        <input
          value={locationVal}
          onChange={(e)=>setLocationVal(e.target.value)}

          placeholder="نام ولایت "

          required

        />

        <label> <FiImage/>عکس محصول </label>
        <input

          value={img}
          onChange={(e)=>setImg(e.target.value)}
          placeholder="لینک عکس محصول"

        />





        <label>

          <FiFileText/>

          توضیحات

        </label>


        <textarea

          value={desc}

          onChange={(e)=>setDesc(e.target.value)}

          placeholder="توضیحات محصول"

        />





        <button type="submit">


          {editProduct

          ? "ذخیره تغییرات"

          : "ذخیره محصول"}


        </button>



      </form>


    </div>

  );

};


export default AddProduct;