import React, { useEffect, useState } from "react";

function OrderStatus() {

  const [orders, setOrders] = useState([]);
  const [id, setId] = useState("");
  const [status, setStatus] = useState("Pending");


  const getData = async () => {
    try {
      const res = await fetch(
        "http://localhost:4000/tbl_order"
      );
      const data = await res.json();
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getData();
  }, []);

  const updateStatus = async () => {
    if (id === "") {
      alert("Please Select Order");
      return;
    }
    try {
      await fetch(
        "http://localhost:4000/tbl_order/" + id,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            status: status
          })
        }
      );

      alert("Order Status Updated");
      getData();
      setId("");
      setStatus("Pending");
    } catch (error) {
      console.log(error);
    }
  };

  const formBox = {
    background: "white",
    padding: "25px",
    width: "450px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
  };


  const label = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold"
  };


  const input = {
    width: "100%",
    padding: "10px",
    margin: "8px 0 15px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "5px"
  };


  const button = {
    padding: "10px 20px",
    background: "#0D9488",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };


  return (
    <div style={{ padding: "25px" }}>
      <h2>Order Status</h2>
      <p>Update customer order status</p>
      <hr />
      <div style={formBox}>
        <label style={label}> Select Order </label>
        <select value={id} onChange={(e) => setId(e.target.value)} style={input}>

          <option value=""> Select Order</option>
          {orders.map((item) => (
            <option
              key={item.id}
              value={item.id}
            >
              {item.id} - {item.customerName}
            </option>
          ))}

        </select>

        <label style={label}> Select Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)} style={input}>
          <option value="Pending">Pending </option>
          <option value="Confirmed"> Confirmed</option>
          <option value="Shipped"> Shipped</option>
          <option value="Delivered"> Delivered </option>
          <option value="Cancelled">Cancelled</option>

        </select>
        <button onClick={updateStatus} style={button}>Update Status</button>

      </div>

    </div>

  );
}
export default OrderStatus;