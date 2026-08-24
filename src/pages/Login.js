import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `http://localhost:4000/tbl_admin?email=${email}&password=${password}`
      );

      if (res.data.length > 0) {
        localStorage.setItem("auth", "true");

        alert("Login Successful");

        navigate("/category");
      } else {
        alert("Invalid Email or Password only Admin can login");
        window.location.reload();
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert("Server error. Please check JSON Server.");
      window.location.reload();
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f1f5f9" }}
    >
      <div
        className="card shadow p-4"
        style={{
          width: "350px",
          borderRadius: "16px",
          border: "none",
        }}
      >
        <h3
          className="text-center mb-4 fw-bold"
          style={{ color: "#0f172a" }}
        >
          Admin Login
        </h3>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label
              className="form-label fw-semibold"
              style={{ color: "#334155", fontSize: "14px" }}
            >
              Email
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "10px 14px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                fontSize: "14px",
              }}
              required
            />
          </div>

          <div className="mb-3">
            <label
              className="form-label fw-semibold"
              style={{ color: "#334155", fontSize: "14px" }}
            >
              Password
            </label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "10px 14px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                fontSize: "14px",
              }}
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100 fw-bold text-white"
            style={{
              padding: "11px",
              borderRadius: "8px",
              backgroundColor: "#945e0d",
              border: "none",
              fontSize: "15px",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#0f766e";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#0d9488";
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}