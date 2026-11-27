
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

function Login({ setAdminName }) {

  const navigate = useNavigate();

  const [loginAs, setLoginAs] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (loginAs === "") {
      toast.error("Please select Admin or Customer");
      return;
    }

    try {

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

          const adminData = {
            id: admin.id,
            name: admin.name,
            email: admin.email
          };

          localStorage.setItem(
            "admin",
            JSON.stringify(adminData)
          );

          setAdminName(admin.name);

          toast.success("Admin Login Successful");

          navigate("/admin/dashboard");

        } else {

          toast.error("Invalid Admin Email or Password");

        }

      } else if (loginAs === "customer") {

        const res = await axios.get(
          "http://localhost:4000/tbl_customer"
        );

        const customer = res.data.find(
          (item) =>
            String(item.email).trim().toLowerCase() ===
            email.trim().toLowerCase() &&
            String(item.password).trim() ===
            password.trim()
        );

        if (customer) {

          const customerData = {
            id: customer.id,
            name: customer.name,
            email: customer.email
          };

          localStorage.setItem(
            "customer",
            JSON.stringify(customerData)
          );

          toast.success("Customer Login Successful");

          navigate("/");

        } else {

          toast.error("Please Register First");

        }
      }

    } catch (error) {

      toast.error("Unable to connect to server");

    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f1f5f9"
      }}
    >

      <div
        className="card shadow p-4"
        style={{
          width: "380px",
          border: "none",
          borderRadius: "12px"
        }}
      >

        <h3
          className="text-center fw-bold mb-4"
          style={{ color: "#0f172a" }}
        >
          Login
        </h3>

        <div className="d-flex justify-content-center gap-4 mb-4">

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

        <form onSubmit={handleLogin}>

          <div className="mb-3">

            <label className="form-label fw-semibold">
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
              required
            />

          </div>

          <div className="mb-3">

            <label className="form-label fw-semibold">
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
              required
            />

          </div>

          <button
            type="submit"
            className="btn w-100 text-white fw-bold"
            style={{
              backgroundColor: "#0d9488",
              borderRadius: "7px",
              padding: "10px"
            }}
          >
            Login
          </button>

          <div className="text-center mt-3">

            <span style={{ color: "#64748b" }}>
              Don't have an account?{" "}
            </span>

            <Link
              to="/register"
              style={{
                color: "#0d9488",
                textDecoration: "none",
                fontWeight: "bold"
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
