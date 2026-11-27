
import React, { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editStatus, setEditStatus] = useState("Pending");

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

  const startUpdateStatus = (item) => {
    setEditId(item.id);
    setEditStatus(item.status);
  };

  const updateStatus = async (id) => {
    await fetch("http://localhost:4000/tbl_order/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: editStatus
      })
    });

    alert("Order Status Updated");
    setEditId(null);
    getData();
  };

  const cancelUpdate = () => {
    setEditId(null);
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

  const updateButton = {
    background: "#0f766e",
    color: "white",
    border: "none",
    padding: "7px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "5px"
  };

  const deleteButton = {
    background: "#dc3545",
    color: "white",
    border: "none",
    padding: "7px 12px",
    borderRadius: "5px",
    cursor: "pointer"
  };

  const saveButton = {
    background: "#198754",
    color: "white",
    border: "none",
    padding: "7px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "5px"
  };

  const cancelButton = {
    background: "#6c757d",
    color: "white",
    border: "none",
    padding: "7px 12px",
    borderRadius: "5px",
    cursor: "pointer"
  };

  const select = {
    padding: "6px",
    borderRadius: "5px",
    border: "1px solid #ccc"
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
                <td style={td}>{item.customerName}</td>
                <td style={td}>{item.date}</td>
                <td style={td}>₹{item.amount}</td>

                <td style={td}>
                  {editId === item.id ? (
                    <select
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value)}
                      style={select}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  ) : (
                    item.status
                  )}
                </td>

                <td style={td}>
                  {editId === item.id ? (
                    <>
                      <button
                        style={saveButton}
                        onClick={() => updateStatus(item.id)}
                      >
                        Save
                      </button>
                      <button
                        style={cancelButton}
                        onClick={cancelUpdate}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        style={updateButton}
                        onClick={() => startUpdateStatus(item)}
                      >
                        Update Status
                      </button>
                      <button
                        style={deleteButton}
                        onClick={() => deleteOrder(item.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
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
