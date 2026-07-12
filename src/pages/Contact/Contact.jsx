import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">

      <div className="contact-hero">
        <h1>
          <FaPhone /> تماس با ما
        </h1>
        <p>اگر سوالی دارید یا همکاری می‌خواهید، با ما در تماس شوید</p>
      </div>

      <div className="contact-info">

        <div className="info-card">
          <FaPhone className="icon"/>
          <h3>تلفن</h3>
          <p>+93 700 000 000</p>
        </div>

        <div className="info-card">
          <FaEnvelope className="icon"/>
          <h3>ایمیل</h3>
          <p>support@agromarket.com</p>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt className="icon"/>
          <h3>آدرس</h3>
          <p>کابل، افغانستان</p>
        </div>

      </div>

      <div className="contact-form">

        <h2>
          <FaPaperPlane /> ارسال پیام
        </h2>

        <form>

          <input 
            type="text"
            placeholder="نام شما"
          />

          <input 
            type="email"
            placeholder="ایمیل شما"
          />

          <textarea 
            placeholder="پیام شما">
          </textarea>

          <button type="submit">
            <FaPaperPlane />
            ارسال
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;