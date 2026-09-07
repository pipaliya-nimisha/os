import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    getCartCount();
  }, []);

const getCartCount = async () => {
  const res = await axios.get("http://localhost:4000/tbl_cart");

  const totalQuantity = res.data.reduce(
    (total, item) => total + Number(item.quantity),
    0
  );

  setCartCount(totalQuantity);
};
  const navStyle = ({ isActive }) => ({
    color: isActive ? "#ffffff" : "#0f766e",
    backgroundColor: isActive ? "#0f766e" : "transparent",
    padding: "9px 18px",
    borderRadius: "7px",
    fontWeight: "600",
    textDecoration: "none",
    whiteSpace: "nowrap",
  });

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #eeeeee",
      }}
    >
      <div className="container">
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ minHeight: "90px" }}
        >
          <Link to="/" className="text-decoration-none">
            <img
              src="/image/logo.png"
              alt="Stationery Hub"
              style={{
                height: "68px",
                width: "145px",
                objectFit: "contain",
              }}
            />
          </Link>

          <div className="d-flex align-items-center gap-1">

            <NavLink to="/" style={navStyle}>
              Home
            </NavLink>

            <NavLink to="/product" style={navStyle}>
              Product
            </NavLink>

            <NavLink to="/category" style={navStyle}>
              Categories
            </NavLink>

            <NavLink to="/contact" style={navStyle}>
              Contact Us
            </NavLink>

            <NavLink to="/feedback" style={navStyle}>
              Feedback
            </NavLink>

            <NavLink to="/logout" style={navStyle}>
              Logout
            </NavLink>

            <Link
              to="/login"
              className="text-decoration-none text-center ms-3"
            >
              <div
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto"
                style={{
                  width: "45px",
                  height: "45px",
                  backgroundColor: "#e8f5f3",
                  fontSize: "20px",
                }}
              >
                👤
              </div>

              <small
                className="fw-semibold"
                style={{ color: "#0f766e" }}
              >
                Login
              </small>
            </Link>

            <Link
              to="/cart"
              className="text-decoration-none text-center ms-3"
              style={{ position: "relative" }}
            >
              <div
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto"
                style={{
                  width: "45px",
                  height: "45px",
                  backgroundColor: "#e8f5f3",
                  fontSize: "20px",
                }}
              >
                🛒
              </div>

              {cartCount > 0 && (
                <span
                  className="badge bg-danger"
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-7px",
                    borderRadius: "50%",
                    fontSize: "11px",
                  }}
                >
                  {cartCount}
                </span>
              )}

              <small
                className="fw-semibold"
                style={{ color: "#0f766e" }}
              >
                Cart
              </small>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;