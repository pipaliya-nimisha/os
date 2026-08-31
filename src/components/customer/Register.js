import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check all fields
    if (!name || !email || !mobile || !password || !address) {
      toast.error("All fields are required");
      return;
    }

    try {

      // ==========================================
      // CHECK CUSTOMER ALREADY EXISTS
      // ==========================================

      const res = await axios.get(
        `http://localhost:4000/tbl_customer?email=${email}`
      );

      if (res.data.length > 0) {
        toast.error("Email already registered");
        return;
      }

      // ==========================================
      // ADD CUSTOMER TO DATABASE
      // ==========================================

      await axios.post(
        "http://localhost:4000/tbl_customer",
        {
          name: name,
          email: email,
          mobile: mobile,
          password: password,
          address: address,
        }
      );

      // ==========================================
      // SUCCESS
      // ==========================================

      toast.success("Registration successful. Please login.");

      // Go to Customer Login page
      navigate("/customer-login");

    } catch (error) {

      console.error("Registration Error:", error);

      toast.error(
        "Registration failed. Please check JSON Server on port 4000."
      );
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">

      <div className="container">

        <div
          className="bg-white mx-auto p-3 rounded-3 shadow-sm"
          style={{
            maxWidth: "420px",
          }}
        >

          {/* ======================================
                        HEADER
          ====================================== */}

          <div className="text-center mb-3">

            <h3
              className="fw-bold mb-1"
              style={{
                color: "#243447",
              }}
            >
              Create Account
            </h3>

            <p className="text-muted mb-1 small">
              Register for Online Stationery Store
            </p>

            <hr
              className="mx-auto my-2"
              style={{
                width: "45px",
                border: "0",
                borderTop: "3px solid #2a9d8f",
              }}
            />

          </div>


          {/* ======================================
                    REGISTRATION FORM
          ====================================== */}

          <form onSubmit={handleRegister}>

            {/* NAME */}

            <div className="form-floating mb-2">

              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
              />

              <label htmlFor="name">
                Enter name
              </label>

            </div>


            {/* EMAIL */}

            <div className="form-floating mb-2">

              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

              <label htmlFor="email">
                Enter email
              </label>

            </div>


            {/* MOBILE */}

            <div className="form-floating mb-2">

              <input
                type="text"
                className="form-control"
                id="mobile"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value)
                }
                required
              />

              <label htmlFor="mobile">
                Enter mobile number
              </label>

            </div>


            {/* PASSWORD */}

            <div className="form-floating mb-2">

              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

              <label htmlFor="password">
                Create password
              </label>

            </div>


            {/* ADDRESS */}

            <div className="form-floating mb-2">

              <textarea
                className="form-control"
                id="address"
                placeholder="Address"
                style={{
                  height: "65px",
                }}
                value={address}
                onChange={(e) =>
                  setAddress(e.target.value)
                }
                required
              ></textarea>

              <label htmlFor="address">
                Enter address
              </label>

            </div>


            {/* REGISTER BUTTON */}

            <button
              type="submit"
              className="btn w-100 text-white fw-semibold py-2"
              style={{
                backgroundColor: "#2a9d8f",
                borderRadius: "7px",
                border: "none",
                fontSize: "14px",
              }}
            >
              Register
            </button>

          </form>


          {/* ======================================
                      LOGIN LINK
          ====================================== */}

          <div className="text-center mt-2 small">

            <span className="text-muted">
              Already have an account?{" "}
            </span>

            <span
              className="fw-semibold"
              style={{
                color: "#2a9d8f",
                cursor: "pointer",
              }}
              onClick={() =>
                navigate("/customer-login")
              }
            >
              Login here
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;