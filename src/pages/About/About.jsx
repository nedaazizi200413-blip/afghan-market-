import "./About.css";
import { FaLeaf, FaUsers, FaGlobe, FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">

      <div className="about-hero">
        <h1>
          <FaLeaf />
          درباره AgroMarket
        </h1>
        <p>
          بازار آنلاین محصولات زراعتی افغانستان که دهقانان را مستقیم به خریداران وصل می‌کند
        </p>
      </div>

      <div className="about-grid">

        <div className="about-card">
          <FaLeaf className="icon"/>
          <h3>محصولات تازه</h3>
          <p>تمام محصولات مستقیم از زمین‌های زراعتی افغانستان</p>
        </div>

        <div className="about-card">
          <FaUsers className="icon"/>
          <h3>حمایت از دهقانان</h3>
          <p>بدون واسطه، درآمد مستقیم برای کشاورزان</p>
        </div>

        <div className="about-card">
          <FaGlobe className="icon"/>
          <h3>دسترسی آسان</h3>
          <p>در هر ولایت افغانستان به محصولات دسترسی دارید</p>
        </div>

        <div className="about-card">
          <FaHandshake className="icon"/>
          <h3>اعتماد و شفافیت</h3>
          <p>قیمت‌ها و اطلاعات کاملاً شفاف و واقعی</p>
        </div>

      </div>

      <div className="about-text">
        <h2>هدف ما چیست؟</h2>
        <p>
          هدف AgroMarket این است که فاصله بین دهقان و مشتری را کم کند،
          تا محصولات تازه، ارزان و مستقیم به دست مردم برسد.
          ما باور داریم زراعت افغانستان می‌تواند دیجیتالی و مدرن شود.
        </p>
      </div>

    </div>
  );
};

export default About;