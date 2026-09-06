import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logoutc() {
  const navigate = useNavigate();

  useEffect(() => {
    alert("Logout Successful");
    navigate("/customer-login");
  }, [navigate]);

  return null;
}

export default Logoutc;