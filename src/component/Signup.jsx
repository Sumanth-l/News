import { useState } from "react";
import "./Signup.css";


export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup Successful!");
    console.log(user);
  };

  return (
    <div>
    <div className="signup-container">
      <div className="signup-box">
        <h1>Signup Page</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
    </div>
  );
}
