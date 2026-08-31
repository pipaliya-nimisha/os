import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar(props) {

  const [selected, setSelected] = useState("dashboard");

  const container = {
    display: "flex",
    backgroundColor: "#FFFDF7"
  };

  const sidebar = {
    width: "220px",
    backgroundColor: "#134E4A",
    color: "white",
    padding: "15px",
    height: "100vh"
  };

  const title = {
    textAlign: "center"
  };

  const subtitle = {
    textAlign: "center",
    fontSize: "12px"
  };

  const main = {
    width: "100%",
    backgroundColor: "#FFFDF7"
  };

  const header = {
    backgroundColor: "white",
    padding: "15px",
    borderBottom: "1px solid gray"
  };

  const content = {
    padding: "20px"
  };

  const link = {
    display: "block",
    color: "#E5E7EB",
    backgroundColor: "#134E4A",
    textDecoration: "none",
    padding: "10px",
    marginTop: "8px",
    borderRadius: "5px"
  };

  const activeLink = {
    display: "block",
    color: "#134E4A",
    backgroundColor: "white",
    textDecoration: "none",
    padding: "10px",
    marginTop: "8px",
    borderRadius: "5px"
  };

  return (
    <div style={container}>

      <div style={sidebar}>

        <h2 style={title}>My Store</h2>

        <p style={subtitle}>
          Online Stationery
          <br />
          Management System
        </p>

        <hr />

        <NavLink
          to="/dashboard"
          style={selected === "dashboard" ? activeLink : link}
          onClick={() => setSelected("dashboard")}
        >
          <i className="fa-solid fa-house"></i> Dashboard
        </NavLink>

        <NavLink
          to="/category"
          style={selected === "category" ? activeLink : link}
          onClick={() => setSelected("category")}
        >
          <i className="fa-solid fa-folder"></i> Category
        </NavLink>

        <NavLink
          to="/products"
          style={selected === "products" ? activeLink : link}
          onClick={() => setSelected("products")}
        >
          <i className="fa-solid fa-box"></i> Products
        </NavLink>

        <NavLink
          to="/stock"
          style={selected === "stock" ? activeLink : link}
          onClick={() => setSelected("stock")}
        >
          <i className="fa-solid fa-chart-column"></i> Stock
        </NavLink>

        <NavLink
          to="/orders"
          style={selected === "orders" ? activeLink : link}
          onClick={() => setSelected("orders")}
        >
          <i className="fa-solid fa-cart-shopping"></i> Orders
        </NavLink>

        <NavLink
          to="/order-status"
          style={selected === "order-status" ? activeLink : link}
          onClick={() => setSelected("order-status")}
        >
          <i className="fa-solid fa-clock-rotate-left"></i> Order Status
        </NavLink>

        <NavLink
          to="/customers"
          style={selected === "customers" ? activeLink : link}
          onClick={() => setSelected("customers")}
        >
          <i className="fa-solid fa-users"></i> Customers
        </NavLink>

        <NavLink
          to="/bill"
          style={selected === "bill" ? activeLink : link}
          onClick={() => setSelected("bill")}
        >
          <i className="fa-solid fa-file-invoice"></i> Generate Bill
        </NavLink>

      </div>

      <div style={main}>

        <div style={header}>

          <b>☰ Admin Panel</b>

          <span style={{ marginLeft: "900px" }}></span>

          <NavLink
            to="/profile"
            style={{
              color: "#134E4A",
              textDecoration: "none",
              cursor: "pointer"
            }}
          >
            <i className="fa-solid fa-user"></i> Profile
          </NavLink>

          <span style={{ marginLeft: "50px" }}></span>

          <button
            onClick={() => window.location.href = "/logout"}
            style={{
              backgroundColor: "#0D9488",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </button>

        </div>

        <div style={content}>
          {props.children}
        </div>

      </div>

    </div>
  );
}

export default Sidebar;