
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [customer] = useState(
    JSON.parse(localStorage.getItem("customer") || "null")
  );

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
    padding: "10px 13px",
    borderRadius: "7px",
    fontWeight: "600",
    textDecoration: "none",
    whiteSpace: "nowrap",
    fontSize: "15px",
  });

  const iconBox = {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    backgroundColor: "#e8f5f3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    margin: "auto",
  };

  const smallText = {
    color: "#0f766e",
    fontWeight: "600",
    fontSize: "13px",
    marginTop: "5px",
    display: "block",
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #eeeeee",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            width: "92%",
            maxWidth: "1650px",
            margin: "auto",
          }}
        >
          <div
            style={{
              minHeight: "95px",
              display: "grid",
              gridTemplateColumns: "190px minmax(0, 1fr) 330px",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Link to="/" className="text-decoration-none">
              <img
                src="/image/logo.png"
                alt="Stationery Hub"
                style={{
                  height: "72px",
                  width: "155px",
                  objectFit: "contain",
                }}
              />
            </Link>

            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: "5px" }}
            >
              <NavLink to="/" style={navStyle}>Home</NavLink>
              <NavLink to="/product" style={navStyle}>Product</NavLink>
              <NavLink to="/category" style={navStyle}>Categories</NavLink>
              <NavLink to="/contact" style={navStyle}>Contact Us</NavLink>
              <NavLink to="/feedback" style={navStyle}>Feedback</NavLink>
            </div>

            <div
              className="d-flex align-items-center justify-content-end"
              style={{ gap: "18px" }}
            >
              {customer ? (
                <Link
                  to="/customer-profile"
                  className="text-decoration-none text-center"
                >
                  <div style={iconBox}>👤</div>
                  <span style={smallText}>{customer.name}</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="text-decoration-none text-center"
                >
                  <div style={iconBox}>👤</div>
                  <span style={smallText}>Login</span>
                </Link>
              )}

              <Link
                to="/cart"
                className="text-decoration-none text-center"
                style={{ position: "relative" }}
              >
                <div style={iconBox}>🛒</div>

                {cartCount > 0 && (
                  <span
                    className="badge bg-danger"
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "-7px",
                      borderRadius: "50%",
                      fontSize: "10px",
                    }}
                  >
                    {cartCount}
                  </span>
                )}

                <span style={smallText}>Cart</span>
              </Link>

              {customer && (
                <Link
                  to="/logout"
                  className="text-decoration-none"
                  style={{
                    color: "#0f766e",
                    border: "1px solid #0f766e",
                    borderRadius: "7px",
                    padding: "10px 15px",
                    fontWeight: "600",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Logout
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "95px" }}></div>
    </>
  );
}

export default Header;
