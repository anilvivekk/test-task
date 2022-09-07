import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./common.css";

const staticUser = [
  { userId: "user1", password: "12345678" },
  { userId: "user2", password: "12345678" },
  { userId: "user3", password: "12345678" },
  { userId: "user4", password: "12345678" },
  { userId: "user5", password: "12345678" },
];

export default function Login() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const loginHandle = (e) => {
    e.preventDefault();
    if (
      staticUser.filter((item) => {
        return item.userId === user && item.password === password;
      }).length !== 0
    ) {
      navigate("/register");
    } else {
      setError("Fill the correct inputs");
    }
  };

  return (
    <div className="main-container">
      <h2>Login Page</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          placeholder="User Id"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginHandle}>Login</button>
      </form>
      {error ? <h2 style={{ color: "red" }}>{error}</h2> : null}
    </div>
  );
}
