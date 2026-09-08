  import React from "react";
  import { NavLink, useNavigate } from "react-router-dom";

  function Sidebar({ children }) {

    const navigate = useNavigate();

    const container = {
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "#FFFDF7"
    };

    const sidebar = {
      width: "220px",
      backgroundColor: "#134E4A",
      color: "white",
      padding: "15px",
      height: "100vh",
      boxSizing: "border-box",
      position: "sticky",
      top: "0",
      overflowY: "auto",
      flexShrink: 0
    };

    const title = {
      textAlign: "center",
      marginBottom: "5px"
    };

    const subtitle = {
      textAlign: "center",
      fontSize: "12px",
      lineHeight: "1.5"
    };

    const main = {
      flex: 1,
      backgroundColor: "#FFFDF7",
      minWidth: 0
    };

    const header = {
      backgroundColor: "white",
      padding: "15px 25px",
      borderBottom: "1px solid #ddd",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: "0",
      zIndex: 1000
    };
    const headerRight = {
      display: "flex",
      alignItems: "center",
      gap: "20px"
    };

    const content = {
      padding: "20px"
    };

    const link = ({ isActive }) => ({
      display: "block",
      color: isActive ? "#134E4A" : "#E5E7EB",
      backgroundColor: isActive ? "white" : "#134E4A",
      textDecoration: "none",
      padding: "10px",
      marginTop: "8px",
      borderRadius: "5px"
    });

    const logoutButton = {
      backgroundColor: "#0D9488",
      color: "white",
      border: "none",
      padding: "8px 15px",
      borderRadius: "5px",
      cursor: "pointer"
    };

    const menuItem = {
      marginRight: "8px"
    };

    const handleLogout = () => {
      navigate("/admin/logout");
    };

    return (
      <div style={container}>

        <div style={sidebar}>

          <h2 style={title}>
            My Store
          </h2>

          <p style={subtitle}>
            Online Stationery
            <br />
            Management System
          </p>

          <hr />

          <NavLink
            to="/admin/dashboard"
            style={link}
          >
            <i
              className="fa-solid fa-house"
              style={menuItem}
            ></i>
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/category"
            style={link}
          >
            <i
              className="fa-solid fa-folder"
              style={menuItem}
            ></i>
            Category
          </NavLink>

          <NavLink
            to="/admin/products"
            style={link}
          >
            <i
              className="fa-solid fa-box"
              style={menuItem}
            ></i>
            Products
          </NavLink>

          <NavLink
            to="/admin/stock"
            style={link}
          >
            <i
              className="fa-solid fa-chart-column"
              style={menuItem}
            ></i>
            Stock
          </NavLink>

          <NavLink
            to="/admin/orders"
            style={link}
          >
            <i
              className="fa-solid fa-cart-shopping"
              style={menuItem}
            ></i>
            Orders
          </NavLink>

          <NavLink
            to="/admin/customers"
            style={link}
          >
            <i
              className="fa-solid fa-users"
              style={menuItem}
            ></i>
            Customers
          </NavLink>

          <NavLink
            to="/admin/feedback"
            style={link}
          >
            <i
              className="fa-solid fa-comments"
              style={menuItem}
            ></i>
            Manage Feedback
          </NavLink>

        </div>

        <div style={main}>

          <div style={header}>

            <b>
              ☰ Admin Panel
            </b>

            <div style={headerRight}>

              <NavLink
                to="/admin/profile"
                style={{
                  color: "#134E4A",
                  textDecoration: "none"
                }}
              >
                <i className="fa-solid fa-user"></i>
                {" "}Profile
              </NavLink>

              <button
                onClick={handleLogout}
                style={logoutButton}
              >
                <i className="fa-solid fa-right-from-bracket"></i>
                {" "}Logout
              </button>

            </div>

          </div>

          <div style={content}>
            {children}
          </div>

        </div>

      </div>
    );
  }

  export default Sidebar;