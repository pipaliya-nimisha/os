
import React from "react";
import { useNavigate } from "react-router-dom";

function Logouta() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove admin login data
    localStorage.removeItem("admin");
    localStorage.removeItem("auth");

    // Go to login page
    navigate("/login");
  };

  const handleCancel = () => {
    navigate("/admin/Dashboard");
  };

  const main = {
    minHeight: "100vh",
    background: "rgba(30, 40, 55, 0.55)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
  };

  const box = {
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: "500px",
    padding: "40px",
    borderRadius: "18px",
    textAlign: "center",
    boxSizing: "border-box",
    boxShadow: "0 25px 60px rgba(0, 0, 0, 0.18)",
  };

  const icon = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "#e6f7f4",
    color: "#0f766e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "35px",
    margin: "0 auto 20px",
  };

  const logoutBtn = {
    background: "#0f766e",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "9px",
    margin: "10px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "700",
    boxShadow: "0 6px 15px rgba(53, 199, 154, 0.22)",
  };

  const cancelBtn = {
    backgroundColor: "#ffffff",
    color: "#657286",
    border: "1px solid #e1e5eb",
    padding: "12px 25px",
    borderRadius: "9px",
    margin: "10px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "700",
  };

  return (
    <div style={main}>
      <div style={box}>

        {/* Logout Icon */}
        <div style={icon}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </div>

        {/* Heading */}
        <h2
          style={{
            color: "#26364c",
            margin: "0 0 10px",
          }}
        >
          Logout
        </h2>

        {/* Message */}
        <p
          style={{
            color: "#98a2b1",
            fontSize: "14px",
            marginBottom: "25px",
          }}
        >
          Are you sure you want to logout?
        </p>

        {/* Logout Button */}
        <button
          style={logoutBtn}
          onClick={handleLogout}
        >
          <i className="fa-solid fa-right-from-bracket"></i>
          &nbsp; Yes, Logout
        </button>

        {/* Cancel Button */}
        <button
          style={cancelBtn}
          onClick={handleCancel}
        >
          Cancel
        </button>

      </div>
    </div>
  );
}

export default Logouta;

