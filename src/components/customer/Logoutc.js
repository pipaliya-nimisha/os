
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Logoutc() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("customer");
    toast.success("Logout Successful");
    navigate("/customer-login");
  }, [navigate]);

  return null;
}

export default Logoutc;
