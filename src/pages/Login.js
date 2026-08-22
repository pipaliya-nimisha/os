import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const login = (e) => {

    e.preventDefault();

    fetch(
      "http://localhost:4000/tbl_admin?email=" +
      email +
      "&password=" +
      password
    )

      .then(res => res.json())

      .then(data => {

        if (data.length > 0) {

          localStorage.setItem(
            "admin",
            JSON.stringify(data[0])
          );

          navigate("/dashboard");

        } else {

          alert("Invalid Email or Password");

        }

      });

  };


  return (

    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#6d28d9"
      }}
    >

      <div
        style={{
          width: "380px",
          background: "white",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px #333"
        }}
      >

        <h1 style={{ textAlign: "center" }}>
          My Store
        </h1>

        <p style={{ textAlign: "center" }}>
          Admin Login
        </p>


        <form onSubmit={login}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            style={input}
            required
          />


          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={input}
            required
          />


          <button type="submit" style={button}>
            Login
          </button>

        </form>

      </div>

    </div>
  );
}


const input = {
  width: "100%",
  padding: "11px",
  margin: "8px 0 15px",
  boxSizing: "border-box",
  border: "1px solid #ccc",
  borderRadius: "6px"
};


const button = {
  width: "100%",
  height: "45px",
  background: "#6d28d9",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};


export default Login;