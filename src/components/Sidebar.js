import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ children }) {
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

        <hr style={line} />

        <NavLink
          to="/dashboard"
          style={({ isActive }) => (isActive ? activeLink : link)}
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/category"
          style={({ isActive }) => (isActive ? activeLink : link)}
        >
          📁 Category
        </NavLink>

        <NavLink
          to="/products"
          style={({ isActive }) => (isActive ? activeLink : link)}
        >
          📦 Products
        </NavLink>

        <NavLink
          to="/stock"
          style={({ isActive }) => (isActive ? activeLink : link)}
        >
          📊 Stock
        </NavLink>

        <NavLink
          to="/orders"
          style={({ isActive }) => (isActive ? activeLink : link)}
        >
          🛒 Orders
        </NavLink>

        <NavLink
          to="/order-status"
          style={({ isActive }) => (isActive ? activeLink : link)}
        >
          🔄 Order Status
        </NavLink>

        <NavLink
          to="/customers"
          style={({ isActive }) => (isActive ? activeLink : link)}
        >
          👥 Customers
        </NavLink>

        <NavLink
          to="/bill"
          style={({ isActive }) => (isActive ? activeLink : link)}
        >
          🧾 Generate Bill
        </NavLink>

        <NavLink
          to="/profile"
          style={({ isActive }) => (isActive ? activeLink : link)}
        >
          👤 Profile
        </NavLink>

        <NavLink
          to="/logout"
          style={({ isActive }) => (isActive ? activeLink : link)}
        >
          🚪 Logout
        </NavLink>

      </div>

      {/* Main Content */}

      <div style={main}>

        {/* Header */}

        <div style={header}>

          <b>☰ Admin Panel</b>

          <span>👨‍💼 Admin</span>

        </div>

        <div style={content}>
          {children}
        </div>

      </div>

    </div>
  );
}

/* Styles */

const container = {
  display: "flex",
  minHeight: "100vh",
};

const sidebar = {
  width: "220px",
  background: "#134E4A",
  color: "white",
  padding: "20px 10px",
  position: "fixed",
  height: "100vh",
  boxSizing: "border-box",
};

const title = {
  textAlign: "center",
  marginBottom: "5px",
};

const subtitle = {
  textAlign: "center",
  fontSize: "11px",
  marginBottom: "15px",
};

const line = {
  border: "1px solid #2DD4BF",
};

const main = {
  marginLeft: "220px",
  width: "calc(100% - 220px)",
  background: "#FFFDF7",
  minHeight: "100vh",
};

const header = {
  background: "#FFFFFF",
  padding: "18px 25px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #ddd",
};

const content = {
  padding: "20px",
};

const link = {
  display: "block",
  color: "#E5E7EB",
  textDecoration: "none",
  padding: "12px 15px",
  margin: "6px 0",
  borderRadius: "6px",
};

const activeLink = {
  display: "block",
  background: "#FFFFFF",
  color: "#0d9488",
  textDecoration: "none",
  padding: "12px 15px",
  margin: "6px 0",
  borderRadius: "6px",
  fontWeight: "bold",
};

export default Sidebar;