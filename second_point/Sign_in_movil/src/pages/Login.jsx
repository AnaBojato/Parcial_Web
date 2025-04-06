import React, { useState } from "react";
import "./Login.css";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember me:", remember);
  };

  return (
    <div className="login-container">
      <div className="circle top-left"></div>
      <div className="circle top-right"></div>

      <div className="login-content">
        <div className="user-icon"></div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="remember">
            <input
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit">Sign in</button>

          <button
            type="button"
            className="forgot"
            onClick={() => console.log("Redirect to forgot password")}
          >
            Forgot password?
          </button>

          
        </form>
      </div>
    </div>
  );
}
