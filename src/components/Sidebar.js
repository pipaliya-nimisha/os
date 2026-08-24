import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar(props) {
  return (
    <div style={container}>

      {/* Sidebar */}

      <div style={sidebar}>

        <h2 style={title}>My Store</h2>

        <p style={subtitle}>
          Online Stationery
          <br />
          Management System
        </p>

        <hr />

        <NavLink to="/dashboard" style={link}>
          🏠 Dashboard
        </NavLink>

        <NavLink to="/category" style={link}>
          📁 Category
        </NavLink>

        <NavLink to="/products" style={link}>
          📦 Products
        </NavLink>

        <NavLink to="/stock" style={link}>
          📊 Stock
        </NavLink>

        <NavLink to="/orders" style={link}>
          🛒 Orders
        </NavLink>

        <NavLink to="/order-status" style={link}>
          🔄 Order Status
        </NavLink>

        <NavLink to="/customers" style={link}>
          👥 Customers
        </NavLink>

        <NavLink to="/bill" style={link}>
          🧾 Generate Bill
        </NavLink>

        <NavLink to="/profile" style={link}>
          👤 Profile
        </NavLink>

        <NavLink to="/logout" style={link}>
          🚪 Logout
        </NavLink>

      </div>

      {/* Main Content */}

      <div style={main}>

        <div style={header}>
          <b>☰ Admin Panel</b>
          <br />
          👨‍💼 Admin
        </div>

        <div style={content}>
          {props.children}
        </div>

      </div>

    </div>
  );
}

/* Styles */

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

export default Sidebar;