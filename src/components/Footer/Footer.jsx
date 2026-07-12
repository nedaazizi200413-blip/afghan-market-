import "./Footer.css";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiHome,
  FiShoppingBag,
  FiInfo,
  FiFacebook,
  FiInstagram,
  FiTwitter
} from "react-icons/fi";


const Footer = () => {

return (

<footer className="footer">


<div className="footer-container">


<div className="footer-box brand">

<h2>
🌾 Afghan Market
</h2>

<p>
Connecting Afghan farmers with customers
through a modern online marketplace.
</p>


<div className="social">

<FiFacebook/>
<FiInstagram/>
<FiTwitter/>

</div>

</div>



<div className="footer-box">

<h3>
Quick Links
</h3>


<a href="/">
<FiHome/>
Home
</a>


<a href="/products">
<FiShoppingBag/>
Products
</a>


<a href="/about">
<FiInfo/>
About
</a>


</div>




<div className="footer-box">

<h3>
Contact
</h3>


<p>
<FiMapPin/>
Kabul, Afghanistan
</p>


<p>
<FiPhone/>
+93 700 000 000
</p>


<p>
<FiMail/>
info@agromarket.af
</p>


</div>


</div>



<div className="copyright">

© 2026 Afghan Market. All Rights Reserved.

</div>



</footer>

)

}


export default Footer;