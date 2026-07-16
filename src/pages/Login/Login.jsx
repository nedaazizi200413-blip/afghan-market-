import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {FaUserDoctor,FaUser,FaLock} from "react-icons/fa6";
import "./Login.css";

function Login(){

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const navigate=useNavigate();

const handleSubmit=(e)=>{
e.preventDefault();
localStorage.setItem("user",username);
navigate("/appointmentList");
};

return(
<section className="login-page">
<div className="login-box">

<div className="login-logo">
<FaUserDoctor/>
</div>

<h1>Login</h1>

<p>Sign in to access Afghan Market services</p>

<form onSubmit={handleSubmit}>

<div className="input-box">
<FaUser/>
<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
required
/>
</div>

<div className="input-box">
<FaLock/>
<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>
</div>

<button type="submit">
Login
</button>

</form>

<div className="bottom-text">
Don't have an account?
<span> Sign Up</span>
</div>

</div>
</section>
)

}

export default Login;