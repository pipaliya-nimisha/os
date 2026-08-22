import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ children }) {

  return (

    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* Sidebar */}

      <div
        style={{
          width: "220px",
          background: "#101d3d",
          color: "white",
          padding: "20px 10px",
          position: "fixed",
          height: "100vh",
          boxSizing: "border-box"
        }}
      >

        <h2 style={{ textAlign: "center" }}>
          My Store
        </h2>

        <p
          style={{
            textAlign: "center",
            fontSize: "11px"
          }}
        >
          Online Stationery
          <br />
          Management System
        </p>

        <hr />


        {/* Dashboard */}

        <NavLink
          to="/dashboard"
          style={({ isActive }) =>
            isActive
              ? activeLink
              : link
          }
        >
          🏠 Dashboard
        </NavLink>


        {/* Category */}

        <NavLink
          to="/category"
          style={({ isActive }) =>
            isActive
              ? activeLink
              : link
          }
        >
          📁 Category
        </NavLink>


        {/* Products */}

        <NavLink
          to="/products"
          style={({ isActive }) =>
            isActive
              ? activeLink
              : link
          }
        >
          📦 Products
        </NavLink>


        {/* Stock */}

        <NavLink
          to="/stock"
          style={({ isActive }) =>
            isActive
              ? activeLink
              : link
          }
        >
          📊 Stock
        </NavLink>


        {/* Orders */}

        <NavLink
          to="/orders"
          style={({ isActive }) =>
            isActive
              ? activeLink
              : link
          }
        >
          🛒 Orders
        </NavLink>


        {/* Order Status */}

        <NavLink
          to="/order-status"
          style={({ isActive }) =>
            isActive
              ? activeLink
              : link
          }
        >
          🔄 Order Status
        </NavLink>


        {/* Customers */}

        <NavLink
          to="/customers"
          style={({ isActive }) =>
            isActive
              ? activeLink
              : link
          }
        >
          👥 Customers
        </NavLink>


        {/* Bill */}

        <NavLink
          to="/bill"
          style={({ isActive }) =>
            isActive
              ? activeLink
              : link
          }
        >
          🧾 Generate Bill
        </NavLink>


        {/* Profile */}

        <NavLink
          to="/profile"
          style={({ isActive }) =>
            isActive
              ? activeLink
              : link
          }
        >
          👤 Profile
        </NavLink>


        {/* Logout */}

        <NavLink
          to="/logout"
          style={({ isActive }) =>
            isActive
              ? activeLink
              : link
          }
        >
          🚪 Logout
        </NavLink>

      </div>


      {/* Main Content */}

      <div
        style={{
          marginLeft: "220px",
          width: "calc(100% - 220px)",
          background: "#f5f7fb",
          minHeight: "100vh"
        }}
      >

        {/* Top Header */}

        <div
          style={{
            background: "white",
            padding: "18px 25px",
            borderBottom: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between"
          }}
        >

          <b>☰ Admin Panel</b>

          <span>
            🔔 &nbsp; 👨‍💼 Admin
          </span>

        </div>


        {children}

      </div>

    </div>
  );
}


/* Normal Link */

const link = {

  display: "block",

  color: "white",

  textDecoration: "none",

  padding: "12px 15px",

  margin: "5px 0",

  borderRadius: "7px",

  transition: "0.2s"

};


/* Selected Link */

const activeLink = {

  display: "block",

  color: "white",

  textDecoration: "none",

  padding: "12px 15px",

  margin: "5px 0",

  borderRadius: "7px",

  background: "#6d28d9",

  fontWeight: "bold",

  boxShadow: "0 3px 8px rgba(0,0,0,0.2)"

};


export default Sidebar;