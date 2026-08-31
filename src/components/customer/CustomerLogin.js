import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CustomerLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.get(
        `http://localhost:4000/tbl_customer?email=${email}&password=${password}`
      );

      if (res.data.length > 0) {

        localStorage.setItem("userAuth", "true");
        localStorage.setItem("userName", email);

        toast.success("Login Successful");

        // Login successful → Customer Home
        navigate("/");

      } else {

        toast.error("Invalid email or password");

      }

    } catch (error) {

      console.error("Login Error:", error);

      toast.error("Unable to connect to server.");

    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
      }}
    >

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-md-5 col-lg-4">

            <div className="bg-white p-4 rounded-4 shadow">

              <h2
                className="text-center fw-bold mb-2"
                style={{ color: "#0f766e" }}
              >
                Customer Login
              </h2>

              <p className="text-center text-muted mb-4">
                Login to your account
              </p>

              <form onSubmit={handleLogin}>

                {/* EMAIL */}

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                </div>


                {/* PASSWORD */}

                <div className="mb-3">

                  <label className="form-label fw-semibold">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                </div>


                {/* LOGIN BUTTON */}

                <button
                  type="submit"
                  className="btn w-100 text-white fw-semibold py-2"
                  style={{
                    backgroundColor: "#0f766e",
                  }}
                >
                  Login
                </button>

              </form>


              {/* REGISTER */}

              <p className="text-center text-muted mt-4 mb-0">

                Don't have an account?{" "}

                <Link
                  to="/register"
                  className="fw-semibold text-decoration-none"
                  style={{
                    color: "#0f766e",
                  }}
                >
                  Register
                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CustomerLogin;