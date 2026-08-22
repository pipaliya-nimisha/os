import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {

  const navigate = useNavigate();


  useEffect(() => {

    localStorage.removeItem("admin");

  }, []);


  return (

    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fb"
      }}
    >

      <div
        style={{
          background: "white",
          padding: "40px",
          textAlign: "center",
          borderRadius: "15px"
        }}
      >

        <div style={{ fontSize: "60px" }}>
          ✅
        </div>

        <h2>
          Logged Out Successfully!
        </h2>

        <p>
          You have been logged out.
        </p>


        <button
          onClick={() =>
            navigate("/login")
          }
          style={button}
        >
          Login Again
        </button>

      </div>

    </div>
  );
}


const button = {
  padding: "11px 25px",
  background: "#6d28d9",
  color: "white",
  border: "none",
  borderRadius: "5px"
};


export default Logout;