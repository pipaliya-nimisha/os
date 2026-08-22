import React, { useEffect, useState } from "react";

function OrderStatus() {

  const [orders, setOrders] = useState([]);

  const [id, setId] = useState("");
  const [status, setStatus] = useState("Pending");


  const getData = () => {

    fetch("http://localhost:4000/tbl_order")

      .then(res => res.json())

      .then(data => {
        setOrders(data);
      });

  };


  useEffect(() => {

    getData();

  }, []);


  const updateStatus = () => {

    if (id == "") {

      alert("Please Select Order");

      return;

    }


    fetch(
      "http://localhost:4000/tbl_order/" +
      id,
      {

        method: "PATCH",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          status: status
        })

      }
    )

      .then(() => {

        alert("Order Status Updated");

        getData();

      });

  };


  return (

    <div style={{ padding: "25px" }}>

      <h2>Order Status</h2>

      <p>Update customer order status</p>


      <div style={formBox}>

        <label>Select Order</label>

        <select
          value={id}
          onChange={(e) =>
            setId(e.target.value)
          }
          style={input}
        >

          <option value="">
            Select Order
          </option>

          {orders.map(item => (

            <option
              key={item.id}
              value={item.id}
            >
              #{item.id} - {item.customerName}
            </option>

          ))}

        </select>


        <label>Select Status</label>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          style={input}
        >

          <option>Pending</option>
          <option>Confirmed</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Cancelled</option>

        </select>


        <button
          onClick={updateStatus}
          style={button}
        >
          Update Status
        </button>

      </div>

    </div>
  );
}


const formBox = {
  background: "white",
  padding: "25px",
  width: "450px",
  borderRadius: "10px"
};


const input = {
  width: "100%",
  padding: "10px",
  margin: "8px 0 15px",
  boxSizing: "border-box"
};


const button = {
  padding: "10px 20px",
  background: "#6d28d9",
  color: "white",
  border: "none",
  borderRadius: "5px"
};


export default OrderStatus;