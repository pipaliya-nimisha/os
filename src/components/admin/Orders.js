import React, { useEffect, useState } from "react";

function Orders() {

  const [orders, setOrders] = useState([]);

  const getData = async () => {
    const res = await fetch("http://localhost:4000/tbl_order");
    const data = await res.json();

    setOrders(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteOrder = async (id) => {

    await fetch("http://localhost:4000/tbl_order/" + id, {
      method: "DELETE"
    });

    getData();
  };

  const box = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
  };

  const table = {
    width: "100%",
    borderCollapse: "collapse"
  };

  const th = {
    color: "black",
    padding: "12px",
    textAlign: "left",
    borderBottom: "1px solid #ddd"
  };

  const td = {
    padding: "12px",
    borderBottom: "1px solid #ddd"
  };

  const deleteButton = {
    background: "#dc3545",
    color: "white",
    border: "none",
    padding: "7px 12px",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <div style={{ padding: "25px" }}>

      <h2>Orders</h2>

      <p>Manage customer orders</p>

      <hr />

      <div style={box}>

        <table style={table}>

          <thead>

            <tr>
              <th style={th}>Order ID</th>
              <th style={th}>Customer</th>
              <th style={th}>Date</th>
              <th style={th}>Amount</th>
              <th style={th}>Status</th>
              <th style={th}>Action</th>
            </tr>

          </thead>

          <tbody>

            {orders.map((item) => (

              <tr key={item.id}>

                <td style={td}>#{item.id}</td>

                <td style={td}>
                  {item.customerName}
                </td>

                <td style={td}>
                  {item.date}
                </td>

                <td style={td}>
                  ₹{item.amount}
                </td>

                <td style={td}>
                  {item.status}
                </td>

                <td style={td}>
                  <button
                    style={deleteButton}
                    onClick={() => deleteOrder(item.id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Orders;