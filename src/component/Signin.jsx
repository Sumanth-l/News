import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
import Navbar from "./NavBar";

export default function Signin() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === login.email &&
      storedUser.password === login.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Signin Successful!");
      navigate("/news");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
   <div>
    <Navbar page="auth"/>
    <div className="signin-container">
         
      <div className="signin-box">
        
        <h1>Signin Page</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={login.email}
            name="email"
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            value={login.password}
            name="password"
            onChange={handleChange}
          />

          <button type="submit">Signin</button>
        </form>
      </div>
    </div>
    </div>
  );
}
