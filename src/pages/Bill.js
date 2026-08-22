import React, { useEffect, useState } from "react";

function Bill() {

  const [orders, setOrders] = useState([]);

  const [id, setId] = useState("");

  const [bill, setBill] = useState(null);


  useEffect(() => {

    fetch("http://localhost:4000/tbl_order")

      .then(res => res.json())

      .then(data => {
        setOrders(data);
      });

  }, []);


  const generateBill = () => {

    const order = orders.find(
      item =>
        String(item.id) === String(id)
    );


    if (order) {

      setBill(order);

    } else {

      alert("Please Select Order");

    }

  };


  return (

    <div style={{ padding: "25px" }}>

      <h2>Generate Bill</h2>

      <p>Create customer bill</p>


      <div style={{ display: "flex", gap: "20px" }}>


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


          <button
            onClick={generateBill}
            style={button}
          >
            Generate Bill
          </button>

        </div>


        {bill && (

          <div style={billBox}>

            <h2 style={{ textAlign: "center" }}>
              📚 OSMS
            </h2>

            <p style={{ textAlign: "center" }}>
              Online Stationery
              Management System
            </p>

            <hr />

            <p>
              <b>Order ID:</b> #{bill.id}
            </p>

            <p>
              <b>Customer:</b>{" "}
              {bill.customerName}
            </p>

            <p>
              <b>Date:</b> {bill.date}
            </p>

            <p>
              <b>Amount:</b> ₹{bill.amount}
            </p>

            <p>
              <b>Payment:</b>{" "}
              {bill.payment || "COD"}
            </p>

            <hr />

            <h3>
              Total: ₹{bill.amount}
            </h3>

            <button
              onClick={() =>
                window.print()
              }
              style={button}
            >
              Print Bill
            </button>

          </div>

        )}

      </div>

    </div>
  );
}


const formBox = {
  background: "white",
  padding: "20px",
  width: "300px",
  borderRadius: "10px"
};


const billBox = {
  background: "white",
  padding: "25px",
  width: "400px",
  borderRadius: "10px"
};


const input = {
  width: "100%",
  padding: "10px",
  margin: "10px 0 15px",
  boxSizing: "border-box"
};


const button = {
  padding: "10px 20px",
  background: "#6d28d9",
  color: "white",
  border: "none",
  borderRadius: "5px"
};


export default Bill;