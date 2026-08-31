import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";

function Login() {

  const location = useLocation();
  const navigate = useNavigate();

  // Register page પરથી આવીએ ત્યારે Customer selected રહેશે
  const [loginAs, setLoginAs] = useState(
    location.state?.loginAs || ""
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Login type check
    if (loginAs === "") {
      alert("Please select Admin or Customer");
      return;
    }

    try {

      // ==========================================
      // ADMIN LOGIN
      // ==========================================

      if (loginAs === "admin") {

        const res = await axios.get(
          "http://localhost:4000/tbl_admin"
        );

        const admin = res.data.find(
          (item) =>
            String(item.email).trim().toLowerCase() ===
              email.trim().toLowerCase() &&
            String(item.password).trim() ===
              password.trim()
        );

        if (admin) {

          localStorage.setItem("auth", "true");

          localStorage.setItem(
            "admin",
            JSON.stringify(admin)
          );

          alert("Admin Login Successful");

          navigate("/admin/Dashboard");

        } else {

          alert("Invalid Admin Email or Password");

        }
      }

      // ==========================================
      // CUSTOMER LOGIN
      // ==========================================

      else if (loginAs === "customer") {

        const res = await axios.get(
          "http://localhost:4000/tbl_customer"
        );

        console.log("Customer Data:", res.data);

        const customer = res.data.find(
          (item) =>
            String(item.email).trim().toLowerCase() ===
              email.trim().toLowerCase() &&
            String(item.password).trim() ===
              password.trim()
        );

        if (customer) {

          localStorage.setItem(
            "customer",
            JSON.stringify(customer)
          );

          localStorage.setItem(
            "customerAuth",
            "true"
          );

          alert("Customer Login Successful");

          // Customer Home Page
          navigate("/");

        } else {

          // Email/password ખોટું હોય તો
          // Register First message
          alert("Please Register First");

        }
      }

    } catch (error) {

      console.error("Login Error:", error);

      alert(
        "Server error. Please check JSON Server on port 4000."
      );
    }
  };

  return (

    <div
      className="container-fluid d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundColor: "#f1f5f9"
      }}
    >

      <div
        className="card shadow p-4"
        style={{
          width: "350px",
          borderRadius: "16px",
          border: "none"
        }}
      >

        {/* TITLE */}

        <h3
          className="text-center mb-4 fw-bold"
          style={{
            color: "#0f172a"
          }}
        >
          Login
        </h3>


        {/* ADMIN / CUSTOMER */}

        <div className="d-flex justify-content-center gap-4 mb-3">

          {/* ADMIN */}

          <div className="form-check">

            <input
              className="form-check-input"
              type="radio"
              name="loginAs"
              value="admin"
              checked={loginAs === "admin"}
              onChange={(e) =>
                setLoginAs(e.target.value)
              }
            />

            <label className="form-check-label fw-semibold">
              Admin
            </label>

          </div>


          {/* CUSTOMER */}

          <div className="form-check">

            <input
              className="form-check-input"
              type="radio"
              name="loginAs"
              value="customer"
              checked={loginAs === "customer"}
              onChange={(e) =>
                setLoginAs(e.target.value)
              }
            />

            <label className="form-check-label fw-semibold">
              Customer
            </label>

          </div>

        </div>


        {/* FORM */}

        <form onSubmit={handleLogin}>

          {/* EMAIL */}

          <div className="mb-3">

            <label
              className="form-label fw-semibold"
              style={{
                color: "#334155",
                fontSize: "14px"
              }}
            >
              Email
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              style={{
                padding: "10px 14px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                fontSize: "14px"
              }}
              required
            />

          </div>


          {/* PASSWORD */}

          <div className="mb-3">

            <label
              className="form-label fw-semibold"
              style={{
                color: "#334155",
                fontSize: "14px"
              }}
            >
              Password
            </label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              style={{
                padding: "10px 14px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                fontSize: "14px"
              }}
              required
            />

          </div>


          {/* LOGIN BUTTON */}

          <button
            type="submit"
            className="btn w-100 fw-bold text-white"
            style={{
              padding: "11px",
              borderRadius: "8px",
              backgroundColor: "#0d9488",
              border: "none",
              fontSize: "15px"
            }}
          >
            Login
          </button>


          {/* REGISTER */}

          <div className="text-center mt-3">

            <span
              style={{
                fontSize: "14px",
                color: "#64748b"
              }}
            >
              Don't have an account?{" "}
            </span>

            <Link
              to="/register"
              style={{
                color: "#0d9488",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "14px"
              }}
            >
              Register
            </Link>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Login;