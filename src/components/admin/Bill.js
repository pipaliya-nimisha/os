import React, { useEffect, useState } from "react";

function Bill() {
  const [orders, setOrders] = useState([]);
  const [id, setId] = useState("");
  const [bill, setBill] = useState(null);

  const getOrders = async () => {
    try {
      const res = await fetch("http://localhost:4000/tbl_order");
      const data = await res.json();
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const generateBill = () => {
    if (id === "") {
      alert("Please Select Order");
    } else {
      const order = orders.find(
        (item) => String(item.id) === String(id)
      );

      if (order) {
        setBill(order);
      } else {
        alert("Order Not Found");
      }
    }
  };

  const main = {
    padding: "25px",
    backgroundColor: "#FFFDF7",
    minHeight: "100vh",
    boxSizing: "border-box",
  };

  const description = {
    color: "#777",
    marginTop: "5px",
  };

  const container = {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
    alignItems: "flex-start",
  };

  const formBox = {
    backgroundColor: "white",
    padding: "20px",
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    boxSizing: "border-box",
  };

  const billBox = {
    backgroundColor: "white",
    padding: "25px",
    width: "400px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    boxSizing: "border-box",
  };

  const input = {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    marginBottom: "15px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "white",
  };

  const button = {
    padding: "10px 20px",
    backgroundColor: "#0D9488",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    outline: "none",
    boxShadow: "none",
  };

  const billTitle = {
    textAlign: "center",
    marginBottom: "5px",
  };

  const billSubtitle = {
    textAlign: "center",
    color: "#666",
  };

  return (
    <div style={main}>
      <h2>Generate Bill</h2>
      <p style={description}>Create customer bill</p><hr />
      <div style={container}>
        <div style={formBox}>
          <label><b>Select Order</b></label>
          <select value={id} onChange={(e) => setId(e.target.value)} style={input}>
            <option value="">Select Order</option>
            {orders.map((item) => (
              <option
                key={item.id}
                value={item.id}
              >
                #{item.id} - {item.customerName}
              </option>
            ))}
          </select>

          <button onClick={generateBill}style={button}>Generate Bill</button>
        </div>

        {bill && (
          <div style={billBox}>
            <h2 style={billTitle}>My Store</h2>
            <p style={billSubtitle}> Online Stationery<br />Management System</p>
            <hr />
            <p><b>Order ID:</b> {bill.id}</p>
            <p><b>Customer:</b> {bill.customerName}</p>
            <p><b>Date:</b> {bill.date}</p>
            <p><b>Amount:</b> ₹{bill.amount}</p>
            <p><b>Payment:</b> {bill.payment || "COD"}</p>
            <hr />
            <h3>Total: ₹{bill.amount}</h3>
          </div>
        )}

      </div>
    </div>
  );
}
export default Bill;